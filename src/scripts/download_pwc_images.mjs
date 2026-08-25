import fs from 'fs';
import path from 'path';

const dir = '/Users/jessefulton/Projects/jessefulton.com/public/media/projects/pwc-enterprise-alignment';
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

const downloads = [
  {
    filename: 'overview.png',
    url: 'https://prod-files-secure.s3.us-west-2.amazonaws.com/17b3dcd1-7217-4942-bd22-ae718ea061bb/eb6f7fcb-a806-47d9-ab59-49666a389ee9/overview.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGZ64HIS%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T052525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQDo6UsrRTg9FfG4h4nMSKuhEAiPVrvIGhcegeuJAt4CIQIhANvooGeAoZoB0QkwMu9iMwlZvbxHHMNXyFA9hIujJokUKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwZhcQ0jkMA6%2BJGuBoq3AMiOCN%2FahusOlLkwwj0G1PU%2FcoUO3OLjtJCKA0wL3QwAMZDKGVZrbIJns9XzViPsZQRVg3zrKOC8vUG6rurQ6YAezLYnYXOttJnQ9x7JuRHwiBwpQc%2FnXWBFD0ehmj535DHelQ4dGyaOO6iGN2SAPZIHNmT7ENCe24yyR1%2Fm8t3GXdFTpspZEVmWAPUtDQGg%2Fowk%2F4Zdd4HWSmbsEdKz8qN0Gr7DsfizDkQEtl216kT%2B3btSvpZuVtseIbWcNVyC2mxGTINJZNpWHJBrW1mLBdiA3lCXtu8JBp0FiaOUAoUR4PdOuOufXITtVWFCgqXZLIuv2jJk6qqsrLnUMyHwWWzHQFXtmkYMl2X5dYXvSTmqr7Bpm6M1LPOcHspFb%2FVQr6p3GAW1ZHAtcHlfPWhUwk8ofuC09lppgiTT9NQgvsc2hjZl70RsMcGD3m5EVJUp9OwldpK04UCuw1wF6EneN8DejqASa7%2B0dUtHELsVQxVxeXUPmwRUahkAOPROk6HvIOO%2FgSlX4jZafIRpLPB1CtaeqZR%2F%2FXq%2BmL%2B7ViRTcNV0xVRAlL0154V%2BfN9t0HP2D%2Bj0853Hf1XNm7ZoSYnMzc2WF1Az1noqy58eHSz%2BsGdaT3c18shuGYRt4ZZqjCN0bPUBjqkAXNx455DPbc1ruuSzYE77iv6RdRJDUtfvxA6KAUocPQhsq%2BexiV%2Fr1zun2dm%2B%2BStb4GS%2FIb9DzncZpCysH39AWB6I%2BUCwmWE5FNvMot93hwMvKdnGqQlyLjDwGXOMAxhW8%2FduONAF1s8qeB1sig6NUNrnSk86HOKW0OTf%2Bp2EDaBshKKqbHxGbFkVEuXZueOzwu8OTmTNgb4g7xK5KEXejVNLeNB&X-Amz-Signature=0bb9e81f3c96201388473f52d22a59d38e01f5388bedd91e58e37b7324c8ac65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject'
  },
  {
    filename: 'Screenshot_2024-01-09_153637.png',
    url: 'https://prod-files-secure.s3.us-west-2.amazonaws.com/17b3dcd1-7217-4942-bd22-ae718ea061bb/2647a474-0b2a-41a1-8b2d-ad356473b0f7/Screenshot_2024-01-09_153637.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGZ64HIS%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T052525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQDo6UsrRTg9FfG4h4nMSKuhEAiPVrvIGhcegeuJAt4CIQIhANvooGeAoZoB0QkwMu9iMwlZvbxHHMNXyFA9hIujJokUKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwZhcQ0jkMA6%2BJGuBoq3AMiOCN%2FahusOlLkwwj0G1PU%2FcoUO3OLjtJCKA0wL3QwAMZDKGVZrbIJns9XzViPsZQRVg3zrKOC8vUG6rurQ6YAezLYnYXOttJnQ9x7JuRHwiBwpQc%2FnXWBFD0ehmj535DHelQ4dGyaOO6iGN2SAPZIHNmT7ENCe24yyR1%2Fm8t3GXdFTpspZEVmWAPUtDQGg%2Fowk%2F4Zdd4HWSmbsEdKz8qN0Gr7DsfizDkQEtl216kT%2B3btSvpZuVtseIbWcNVyC2mxGTINJZNpWHJBrW1mLBdiA3lCXtu8JBp0FiaOUAoUR4PdOuOufXITtVWFCgqXZLIuv2jJk6qqsrLnUMyHwWWzHQFXtmkYMl2X5dYXvSTmqr7Bpm6M1LPOcHspFb%2FVQr6p3GAW1ZHAtcHlfPWhUwk8ofuC09lppgiTT9NQgvsc2hjZl70RsMcGD3m5EVJUp9OwldpK04UCuw1wF6EneN8DejqASa7%2B0dUtHELsVQxVxeXUPmwRUahkAOPROk6HvIOO%2FgSlX4jZafIRpLPB1CtaeqZR%2F%2FXq%2BmL%2B7ViRTcNV0xVRAlL0154V%2BfN9t0HP2D%2Bj0853Hf1XNm7ZoSYnMzc2WF1Az1noqy58eHSz%2BsGdaT3c18shuGYRt4ZZqjCN0bPUBjqkAXNx455DPbc1ruuSzYE77iv6RdRJDUtfvxA6KAUocPQhsq%2BexiV%2Fr1zun2dm%2B%2BStb4GS%2FIb9DzncZpCysH39AWB6I%2BUCwmWE5FNvMot93hwMvKdnGqQlyLjDwGXOMAxhW8%2FduONAF1s8qeB1sig6NUNrnSk86HOKW0OTf%2Bp2EDaBshKKqbHxGbFkVEuXZueOzwu8OTmTNgb4g7xK5KEXejVNLeNB&X-Amz-Signature=862f82437005c6b9d7607347c087f8f52816bfb3ff6be99ea22e08b8b16d9873&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject'
  }
];

async function run() {
  for (const d of downloads) {
    const dest = path.join(dir, d.filename);
    try {
      console.log(`Downloading ${d.filename}...`);
      const res = await fetch(d.url);
      if (res.ok) {
        const buf = Buffer.from(await res.arrayBuffer());
        fs.writeFileSync(dest, buf);
        console.log(`Successfully saved ${dest} (${buf.length} bytes)`);
      } else {
        console.error(`Failed ${d.filename}: status ${res.status}`);
      }
    } catch (e) {
      console.error(`Error downloading ${d.filename}:`, e.message);
    }
  }
}

run();
