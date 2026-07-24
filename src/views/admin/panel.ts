import { layout } from "../layout";

export function adminPanel(){

return layout(`
<h1>HashPanel Dashboard</h1>

<div class="grid">

<div class="card">
<h3>Users</h3>
<p>0</p>
</div>

<div class="card">
<h3>Configs</h3>
<p>0</p>
</div>

<div class="card">
<h3>Subscriptions</h3>
<p>0</p>
</div>

</div>


<div class="card">

<h2>Create Config</h2>

<form method="POST" action="/api/config/create">

<input name="name" placeholder="Username">

<input name="volume" placeholder="Volume GB">

<input name="days" placeholder="Expire Days">

<button>
Generate
</button>

</form>

</div>

`);

}
