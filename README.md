# node-chart-exec
node-chart-exec is a configurable executable command program that generates charts in Node.js. It uses dependencies [Chart.js](https://www.chartjs.org/), [chartjs-node-canvas](npmjs.com/package/chartjs-node-canvas), [fs-extra](https://www.npmjs.com/package/fs-extra), and [yargs](https://www.npmjs.com/package/fs-extra). It uses [npx](https://nodejs.dev/learn/the-npx-nodejs-package-runner) command to generate charts. The program is written in JavaScript by [gayanvoice](https://github.com/gayanvoice).
## Synopsis
`npx node-chart-exec@[@version] --type --options --height --width --labels --dataset --outputfile`

## Description
| Option | Description | Type | Example | Required |
| ------ | ----------- | ---- | ------- | -------- |
| `--type` | Chart type supported by Chart.js. | `String` | `--type='line'` | `true` |
| `--options` | Choose `true` for enable options or `false` for disable options. If you enter `true` it will remove all the values from the chart. | `Boolean` | `--options=true` | `true` |
| `--height` | Height of the canvas.| `Integer` | `--height=400` | `true' |
| `--width` | Width of the canvas. | `Integer` | `--width=400` | `true` |
| `--labels` | Labels of the chart. |`JSON` | `--labels='["Label 1", "Label 2", "Label 3", "Label 4", "Label 5", "Label 6"]'` | `true` |
| `--dataset` | Dataset of the chart. |`JSON` | `--dataset='[{"label":"Label of Chart", "data":[10, 20, 30, 40, 50, 40], "backgroundColor":"#7ACFFF", "borderColor":"#00A3FF"}}]'` | `true` |
| `--outputfile` | Output file in `PNG` file type. |`String` | `--outputfile='directory/file.png'` | `true` |

## Author
Written by [Gayan Kuruppu](https://github.com/gayanvoice).

## 📄 License

- Repository: [gayanvoice/node-chart-exec](https://github.com/gayanvoice/node-chart-exec)
- NPM: [node-chart-exec](https://www.npmjs.com/package/node-chart-exec)
- Code: [MIT](./LICENSE) © [Gayan Kuruppu](https://github.com/gayanvoice)