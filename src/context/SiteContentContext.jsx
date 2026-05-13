import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';
import {
  loadBlogs,
  saveBlogsToStorage,
  loadHomeMeta,
  saveHomeMetaToStorage,
  clearHomeMetaStorage,
  loadRobotsTxt,
  saveRobotsTxtToStorage,
  clearRobotsStorage,
} from '../lib/siteStorage';

function dispatchSiteContentChanged() {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new Event('recoup:site-content'));
  }
}

const SiteContentContext = createContext(null);

export function SiteContentProvider({ children }) {
  const [blogs, setBlogs] = useState(() => loadBlogs());
  const [homeMeta, setHomeMeta] = useState(() => loadHomeMeta());
  const [robotsTxt, setRobotsTxt] = useState(() => loadRobotsTxt());

  const saveBlogs = useCallback((next) => {
    saveBlogsToStorage(next);
    setBlogs(next);
    dispatchSiteContentChanged();
  }, []);

  const saveHomeMeta = useCallback((meta) => {
    saveHomeMetaToStorage(meta);
    setHomeMeta(meta);
    dispatchSiteContentChanged();
  }, []);

  const resetHomeMeta = useCallback(() => {
    clearHomeMetaStorage();
    setHomeMeta(null);
    dispatchSiteContentChanged();
  }, []);

  const saveRobotsTxt = useCallback((text) => {
    saveRobotsTxtToStorage(text);
    setRobotsTxt(text);
    dispatchSiteContentChanged();
  }, []);

  const resetRobotsTxt = useCallback(() => {
    clearRobotsStorage();
    setRobotsTxt(loadRobotsTxt());
    dispatchSiteContentChanged();
  }, []);

  const refreshFromStorage = useCallback(() => {
    setBlogs(loadBlogs());
    setHomeMeta(loadHomeMeta());
    setRobotsTxt(loadRobotsTxt());
  }, []);

  const value = useMemo(
    () => ({
      blogs,
      saveBlogs,
      homeMeta,
      saveHomeMeta,
      resetHomeMeta,
      robotsTxt,
      saveRobotsTxt,
      resetRobotsTxt,
      refreshFromStorage,
    }),
    [
      blogs,
      saveBlogs,
      homeMeta,
      saveHomeMeta,
      resetHomeMeta,
      robotsTxt,
      saveRobotsTxt,
      resetRobotsTxt,
      refreshFromStorage,
    ]
  );

  return <SiteContentContext.Provider value={value}>{children}</SiteContentContext.Provider>;
}

export function useSiteContent() {
  const ctx = useContext(SiteContentContext);
  if (!ctx) {
    throw new Error('useSiteContent must be used within SiteContentProvider');
  }
  return ctx;
}
