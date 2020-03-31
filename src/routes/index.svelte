<script context="module">
  import { getHistory } from '../data/api';

  export async function preload() {
    return {
      data: await getHistory()
    };
  }
</script>

<script>
  import { onMount } from 'svelte';
  import Chart from 'chart.js';
  import { mapDataToTotalCases, mapDataToNewCases } from '../data/mappings';

  export let data;

  let canvas;

  onMount(() => {
    const ctx = canvas.getContext('2d');

    console.log(data);

    const myBarChart = new Chart(ctx, {
      type: 'line',
      data: {
        datasets: [
          {
            borderColor: 'red',
            label: 'Número de casos totales',
            fill: false,
            data: mapDataToTotalCases(data)
          },
          {
            borderColor: 'blue',
            label: 'Número de casos nuevos por día',
            fill: false,
            data: mapDataToNewCases(data)
          }
        ]
      },
      options: {
        scales: {
          xAxes: [
            {
              type: 'time',
              time: {
                unit: 'day'
              }
            }
          ]
        }
      }
    });
  });
</script>

<svelte:head>
  <title>Sapper project template</title>
</svelte:head>

<canvas bind:this="{canvas}"></canvas>
