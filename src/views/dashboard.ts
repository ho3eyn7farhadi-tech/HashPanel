import { layout } from "./layout";

export function dashboard() {
  return layout(`
    <h1>HashPanel</h1>
    <p>پنل مدیریت اختصاصی</p>

    <div class="card">
      <h3>System Status</h3>
      <p>Online</p>
    </div>
  `);
}
