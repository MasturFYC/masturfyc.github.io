<script lang="ts">
	import csv from 'csvtojson';
	import fetchApi from '$lib/fetch-api';

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
		const endpoint = 'https://malvamelva.com/api/v1/label103';
		await fetchApi
			.headers({
				Accept: 'application/pdf',
				'Content-Type': 'application/json'
			})
			.url(endpoint, true)
			.post({
				opt: { ...opt },
				data: data.map((m) => ({ ...m, id: +m.id }))
			})
			.blob((blob) => {
				//const pdfblob = new Blob([blob], { type: 'application/pdf' });
				var url = window.URL.createObjectURL(blob);
				var a = document.createElement('a');
				a.href = url;
				a.download = 'label103.pdf';
				a.click();
				a.remove();
				setTimeout(() => window.URL.revokeObjectURL(url), 1000);
				//window.URL.revokeObjectURL(url);
			})
			.catch((error) => {
				console.log(error);
			});
	};
</script>

<section>
	<div class="title">Label 103</div>
	<div class="div-control">
		<label>
			<span>Data: (format data: name1, name2, job, address, city)</span>
			<textarea class="textarea is-full" rows="10" bind:value={sampleData} />
		</label>
	</div>
	<div class="buttons">
		<button class="button is-success" on:click={() => parseToJSON(sampleData)}
			>
			<i class="fa-solid fa-wand-sparkles mr-2"></i>
			<span>Parse input to JSON</span></button
		>
		<button
			class="button is-info"
			on:click={() => {
				const elem = document.getElementById('input-file');
				elem?.click();
			}}>
			<i class="fa-solid fa-upload mr-2"></i>
			<span>Load from CSV/JSON file</span></button
		>
		<button class="button is-warning" on:click={() => downloadObjectAsJson(data)}>
			<i class="fa-solid fa-download mr-2"></i>
			<span>Save data as JSON</span></button
		>
		<button class="button is-link" on:click={() => donwloadLabel()}>
			<i class="fa-solid fa-file-pdf mr-2"></i>
			<span>Download Label</span>
		</button>
	</div>
	<input
		id="input-file"
		type="file"
		style={'display: none'}
		class="button is-success mb-4 mt-2"
		accept="text/csv,application/json"
		on:change|preventDefault={(e) => readFile(e)}
	/>
	<!-- <table class="table is-fullwidth">
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
	</table> -->
	<div>
		<pre class="p-0 div-pre">{JSON.stringify(data,null,2)}</pre>
	</div>
</section>

<style lang="scss">
	textarea {
		padding: 0.5rem 1rem;
	}

	.div-control {
		margin: 1rem 0;
	}

	label > span {
		margin-bottom: 0.25rem;
		font-size: small;
	}
	.div-pre {
		overflow-x: hidden;
		font-size: 0.75rem;
	}
</style>
