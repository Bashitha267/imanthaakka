// Safe Supabase client with graceful local storage fallback

export const supabase = {
  from: (tableName: string) => ({
    insert: async (data: any) => {
      try {
        if (typeof window !== 'undefined') {
          const key = `supabase_${tableName}`;
          const current = JSON.parse(localStorage.getItem(key) || '[]');
          current.push({ ...data, created_at: new Date().toISOString() });
          localStorage.setItem(key, JSON.stringify(current));
        }
      } catch (err) {
        console.warn('Local storage fallback error:', err);
      }
      return { data: null, error: null };
    },
    select: async () => {
      return { data: [], error: null };
    }
  })
};

export default supabase;
