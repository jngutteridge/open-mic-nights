<script lang="ts">
  export let data;

  $: host = data.host;
</script>
<div class="m-4 p-4 rounded-xl bg-slate-800">
  <div class="flex gap-4">
    <div class="grow">
      <h1 class="text-2xl">{ host }</h1>
    </div>
  </div>
</div>
