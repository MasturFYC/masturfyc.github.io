<script lang="ts">
	import csv from 'csvtojson';

	type Label103 = {
		id: number;
		name1: string;
		name2?: string;
		job?: string;
		address?: string;
		city: string;
	};
	type labelType = {
		col: number;
		row: number;
		labelWidth: number;
		labelHeight: number;
		pageWidth: number; //paper
		pageHeight: number; //paper
		horizontalPitch: number;
		verticalPitch: number;
	};

	const header = 'id, name1, name2, job, address, city';
	let data: Label103[] = [];
	const opt: labelType = {
		col: 3,
		row: 4,
		labelWidth: 64,
		labelHeight: 32,
		pageWidth: 137,
		pageHeight: 200,
		horizontalPitch: 65,
		verticalPitch: 33
	};

	let sampleData =
		'1,Udin,Fitri,,Ds. Plumbon,Indramayu\n2,"Wardana, S.Pd",Uung,Pedagang,Blok Bojong RT. 15/06, Ds. Plumbon';

	function parseToJSON(txt: string) {
		csv()
			.fromString(header + '\n' + txt)
			.then((jsonObj) => {
				data = jsonObj;
			});
	}

	function getExtention(fileName: string) {
		const fileSplit = fileName.split('.');
		let fileExt = '';
		if (fileSplit.length > 1) {
			fileExt = fileSplit[fileSplit.length - 1];
		}
		return fileExt;
	}

	const jsonToCsv = (data: Label103[]) => {
		const s: string[] = [];
		data.forEach((elem) => {
			s.push(
				Object.values(elem)
					.map((m) => {
						if (typeof m === 'string') {
							if (m.indexOf(',') > 0) {
								return '"' + m + '"';
							}
							return m;
						}
						return m;
					})
					.join(',')
			);
		});
		return s.join('\n');
	};

	async function readFile(e: Event & { currentTarget: EventTarget & HTMLInputElement }) {
		const target = e.currentTarget as HTMLInputElement;
		if (target && target.files && target.files[0]) {
			const file = target.files[0];
			const reader = new FileReader();

			if (getExtention(file.name) === 'csv') {
				reader.onload = async (e) => {
					const txt = (e.target?.result as string) ?? '';
					await csv()
						.fromString(txt)
						.then((jsonObj) => {
							data = jsonObj;
							sampleData = txt.substring(txt.indexOf('\n') + 1);
						});
				};
			} else {
				reader.onload = async (e) => {
					const txt = (e.target?.result as string) ?? '';
					data = await JSON.parse(txt);
					sampleData = jsonToCsv(data);
				};
			}
			reader.readAsText(file, 'utf-8');
		}
	}

	function downloadObjectAsJson(exportObj: Label103[]) {
		var dataStr =
			'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(exportObj, null, 3));
		var downloadAnchorNode = document.createElement('a');
		downloadAnchorNode.setAttribute('href', dataStr);
		downloadAnchorNode.setAttribute('download', 'data-undangan.json');
		document.body.appendChild(downloadAnchorNode); // required for firefox
		downloadAnchorNode.click();
		downloadAnchorNode.remove();
	}

	const donwloadLabel = async () => {
		await fetch('https://malvamelva.com/api/v1/label103', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/pdf'
			},
			body: JSON.stringify({
				opt: {...opt},
				data: data.map(m => ({...m, id: +m.id}))
				})
		}).then(response => response.blob())
		.then(blob => {
			var url = window.URL.createObjectURL(blob);
				var a = document.createElement('a');
				a.href = url;
				a.download = "label103.pdf";
				document.body.appendChild(a)
				a.click();
				a.remove();
				setTimeout(() => window.URL.revokeObjectURL(url), 1000);
		});
	};
</script>

<section class="section">
	<h2>Label 103</h2>
	<div class="div-control">
		<label>
			<span>Data: (format data: name1, name2, job, address, city)</span>
			<textarea rows="10" bind:value={sampleData} />
		</label>
	</div>
	<button class="button is-success mb-4" on:click={() => parseToJSON(sampleData)}
		>Parse input to JSON</button
	>
	<button
		class="button is-info mb-4 ml-2"
		on:click={() => {
			const elem = document.getElementById('input-file');
			elem?.click();
		}}>Load from CSV/JSON file</button
	>
	<button class="button is-warning mb-4 ml-2" on:click={() => downloadObjectAsJson(data)}
		>Save data as JSON</button
	>
	<button class="button is-warning mb-4 ml-2" on:click={() => donwloadLabel()}
		>Download Label</button
	>
	<input
		id="input-file"
		type="file"
		style={'display: none'}
		class="button is-success mb-4 mt-2"
		accept="text/csv,application/json"
		on:change|preventDefault={(e) => readFile(e)}
	/>
	<table>
		<thead>
			<tr>
				<th>ID</th>
				<th>NAME1</th>
				<th>NAME2</th>
				<th>JOB</th>
				<th>ADDRESS</th>
				<th>CITY</th>
			</tr>
		</thead>
		<tbody>
			{#each data as c (c.id)}
				<tr>
					<td>{c.id}</td>
					<td>{c.name1}</td>
					<td>{c.name2}</td>
					<td>{c.job}</td>
					<td>{c.address}</td>
					<td>{c.city}</td>
				</tr>
			{/each}
		</tbody>
	</table>
</section>

<style>
	textarea {
		padding: 0.5rem 1rem;
		width: 100%;
	}

	.div-control {
		margin: 1rem 0;
	}

	label > span {
		margin-bottom: 0.25rem;
		font-size: 0.9rem;
	}

	table {
		width: 100%;
		border-collapse: collapse;
	}
	td,
	th {
		border: 1px solid #888;
	}

	th {
		color: #cecece;
	}

	td {
		padding: 0.25rem 0.5rem;
	}
	th {
		padding: 0.5rem;
	}

	@media (prefers-color-scheme: light) {
		td,
		th {
			border: 1px solid #777;
		}
		th {
			color: #333;
		}
	}
</style>
