import { readFile } from 'node:fs/promises';
import pg from 'pg';

const connectionString = process.env.DATABASE_URL;
if (!connectionString) {
  console.error('DATABASE_URL ausente; configure o ambiente privado antes de migrar.');
  process.exitCode = 1;
} else {
  const pool = new pg.Pool({ connectionString, max: 1 });
  try {
    const sql = await readFile(
      new URL('../migrations/001_create_tasks.sql', import.meta.url),
      'utf8'
    );
    await pool.query(sql);
    console.log('Tabela inicial preparada.');
  } catch {
    // Não imprimir exceção bruta: ela pode revelar dados do ambiente.
    console.error('Migração falhou. Confira acesso, conectividade e esquema no ambiente privado.');
    process.exitCode = 1;
  } finally {
    await pool.end();
  }
}
