import React, { useState } from 'react';
import { Download } from 'lucide-react';
import { supabase } from '../../lib/supabase';
import { downloadCsv } from '../../lib/csv';
import { Button } from '../../components/ui/Button';

/** Exports every row of a table to CSV. */
export default function ExportButton({ table, filename, orderBy = 'created_at' }) {
  const [busy, setBusy] = useState(false);
  return (
    <Button
      type="button"
      variant="outline"
      size="sm"
      disabled={busy}
      className="gap-2"
      onClick={async () => {
        setBusy(true);
        const { data, error } = await supabase.from(table).select('*').order(orderBy, { ascending: false }).limit(5000);
        setBusy(false);
        if (error) alert(error.message);
        else if (!data.length) alert('Nothing to export yet.');
        else downloadCsv(`${filename || table}-${new Date().toISOString().slice(0, 10)}.csv`, data);
      }}
    >
      <Download className="h-4 w-4" /> Export CSV
    </Button>
  );
}
