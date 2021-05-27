# node-chart-exec
node-chart-exec is a configurable executable command program that generates charts in Node.js.
It uses dependencies [Chart.js](https://www.chartjs.org/), [chartjs-node-canvas](https://www.npmjs.com/package/chartjs-node-canvas), [fs-extra](https://www.npmjs.com/package/fs-extra), and [yargs](https://www.npmjs.com/package/fs-extra). It uses [npx](https://nodejs.dev/learn/the-npx-nodejs-package-runner) command to generate charts. The program is written in JavaScript by [gayanvoice](https://github.com/gayanvoice).
## Synopsis
`npx node-chart-exec@[@version] --type --options --height --width --labels --dataset --outputfile`
## Description
| Option | Description | Type | Example | Required |
| ------ | ----------- | ---- | ------- | -------- |
| `--type` | Chart type supported by Chart.js. | `String` | `--type='line'` | `true` |
| `--options` | Choose `true` for enable options or `false` for disable options. If you enter `true` it will remove all the values from the chart. | `String` | `--options='true'` | `true` |
| `--height` | Height of the canvas.| `Integer` | `--height=400` | `true` |
| `--width` | Width of the canvas. | `Integer` | `--width=400` | `true` |
| `--labels` | Labels of the chart. |`JSON` | `--labels='["Label 1", "Label 2", "Label 3", "Label 4", "Label 5", "Label 6"]'` | `true` |
| `--dataset` | Dataset of the chart. |`JSON` | `--dataset='[{"label":"Label of Chart", "data":[10, 20, 30, 40, 50, 40], "backgroundColor":"#7ACFFF", "borderColor":"#00A3FF"}}]'` | `true` |
| `--outputfile` | Output file in `PNG` file type. |`String` | `--outputfile='directory/file.png'` | `true` |
## Output
### 1. Line chart `--type='line'`
#### With options `--options=true`
##### Command Line
```shell
$ npx node-chart-exec@1.0.8 --type='line' --options='true' --height=400 --width=400 --labels='["Label 1", "Label 2", "Label 3", "Label 4", "Label 5", "Label 6"]' --dataset='[{"label":"Label of Chart", "data":[10, 20, 30, 40, 50, 40], "backgroundColor":"#7ACFFF", "borderColor":"#00A3FF"}]' --outputfile='output/line-chart-with-options.png'

  Node Chart Exec Started
  All inputs are validated
  Canvas width=400 height=400
  Chart type='line' options='true' labels=["Label 1","Label 2","Label 3","Label 4","Label 5","Label 6"] output-file='output/line-chart-with-options.png'
  Dataset [1/1] label='Label of Chart' data=[10,20,30,40,50,40] background-color='#7ACFFF' border-color='#00A3FF'
  Image file created at 'output/line-chart-with-options.png'
  Node Chart Exec Completed
```
#### Without options `--options=false`
##### Command Line
```shell
$ npx node-chart-exec@1.0.8 --type='line' --options='false' --height=400 --width=400 --labels='["Label 1", "Label 2", "Label 3", "Label 4", "Label 5", "Label 6"]' --dataset='[{"label":"Label of Chart", "data":[10, 20, 30, 40, 50, 40], "backgroundColor":"#7ACFFF", "borderColor":"#00A3FF"}]' --outputfile='output/line-chart-with-no-options.png'

  Node Chart Exec Started
  All inputs are validated
  Canvas width=400 height=400
  Chart type='line' options='false' labels=["Label 1","Label 2","Label 3","Label 4","Label 5","Label 6"] output-file='output/line-chart-with-options.png'
  Dataset [1/1] label='Label of Chart' data=[10,20,30,40,50,40] background-color='#7ACFFF' border-color='#00A3FF'
  Image file created at 'output/line-chart-without-options.png'
  Node Chart Exec Completed
```
##### Output
| `output/lines-chart-with-options.png` | `output/lines-chart-without-options.png` |
| ------------------------------------- | ---------------------------------------- |
| ![Line Chart With Options](https://github.com/gayanvoice/javascript-action-template/raw/main/output/line-chart-with-options.png) | ![Line Chart Without Options](https://github.com/gayanvoice/javascript-action-template/raw/main/output/line-chart-without-options.png) |
### 2. Bar chart `--type='bar'`
#### With options `--options=true`
##### Command Line
```shell
$ npx node-chart-exec@1.0.9 --type='bar' --options='true' --height=400 --width=400 --labels='["Label 1", "Label 2", "Label 3", "Label 4", "Label 5", "Label 6"]' --dataset='[{"label":"Label of Chart", "data":[10, 20, 30, 40, 50, 40], "backgroundColor":"#7ACFFF", "borderColor":"#00A3FF"}]' --outputfile='output/bar-chart-with-options.png'
  
  Node Chart Exec Started
  All inputs are validated
  Canvas width=400 height=400
  Chart type='bar' options='true' labels=["Label 1","Label 2","Label 3","Label 4","Label 5","Label 6"] output-file='output/bar-chart-with-options.png'
  Dataset [1/1] label='Label of Chart' data=[10,20,30,40,50,40] background-color='#7ACFFF' border-color='#00A3FF'
  Image file created at 'output/bar-chart-with-options.png'
  Node Chart Exec Completed
```
#### Without options `--options=false`
##### Command Line
```shell
$ npx node-chart-exec@1.0.9 --type='bar' --options='false' --height=400 --width=400 --labels='["Label 1", "Label 2", "Label 3", "Label 4", "Label 5", "Label 6"]' --dataset='[{"label":"Label of Chart", "data":[10, 20, 30, 40, 50, 40], "backgroundColor":"#7ACFFF", "borderColor":"#00A3FF"}]' --outputfile='output/bar-chart-without-options.png'

  Node Chart Exec Started
  All inputs are validated
  Canvas width=400 height=400
  Chart type='bar' options='false' labels=["Label 1","Label 2","Label 3","Label 4","Label 5","Label 6"] output-file='output/bar-chart-without-options.png'
  Dataset [1/1] label='Label of Chart' data=[10,20,30,40,50,40] background-color='#7ACFFF' border-color='#00A3FF'
  Image file created at 'output/bar-chart-without-options.png'
```
##### Output
| `output/lines-chart-with-options.png` | `output/lines-chart-without-options.png` |
| ------------------------------------- | ---------------------------------------- |
| ![Bar Chart With Options](https://github.com/gayanvoice/javascript-action-template/raw/main/output/bar-chart-with-options.png) | ![Bar Chart Without Options](https://github.com/gayanvoice/javascript-action-template/raw/main/output/bar-chart-without-options.png) |
## Author
Written by [Gayan Kuruppu](https://github.com/gayanvoice).
## 📄 License
- Repository: [gayanvoice/node-chart-exec](https://github.com/gayanvoice/node-chart-exec)
- NPM: [node-chart-exec](https://www.npmjs.com/package/node-chart-exec)
- Code: [MIT](./LICENSE) © [Gayan Kuruppu](https://github.com/gayanvoice)