
import { supabase } from "@/lib/supabase";

export default async function Home() {
  const { data, error } = await supabase
    .from("favorites")
    .select("*");

  return (
    <div style={{ padding: 40 }}>
      <h1>URFAVE Database Test</h1>

      {error && <p>Error: {error.message}</p>}

      {data && (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      )}
    </div>
  );
}
