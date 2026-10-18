import React from 'react';
import AdminResource from '../AdminResource';

export default function AdminKnowledge() {
  return (
    <AdminResource
      title="Knowledge base"
      description="Verified content the Ask RECOUP assistant searches. Each entry should describe one program or topic in plain words, with the page it links to."
      table="ai_knowledge"
      select="id,title,category,url,tags,content,published,updated_at"
      orderBy={{ column: 'title', ascending: true }}
      defaults={{ published: true, tags: '', content: '' }}
      columns={[
        { key: 'title', label: 'Title' },
        { key: 'category', label: 'Category' },
        { key: 'url', label: 'URL' },
        { key: 'published', label: 'Live', type: 'bool' },
      ]}
      fields={[
        { key: 'title', label: 'Title', type: 'text', required: true },
        { key: 'category', label: 'Category', type: 'text' },
        { key: 'url', label: 'Page URL', type: 'text', placeholder: '/conditions/slug', help: 'Where the assistant sends people, for example /conditions/back-pain.' },
        { key: 'tags', label: 'Tags', type: 'text', help: 'Extra search words separated by spaces, such as synonyms people might type.' },
        { key: 'content', label: 'Content', type: 'textarea', rows: 10, help: 'The first 260 characters are shown as the preview. Put the clearest summary first.' },
        { key: 'published', label: 'Live', type: 'bool', checkLabel: 'Show in assistant results' },
      ]}
    />
  );
}
