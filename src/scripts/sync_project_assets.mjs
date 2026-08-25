import fs from 'fs';
import path from 'path';

const basePublicDir = '/Users/jessefulton/Projects/jessefulton.com/public/media/projects';

// 1. Local copy jobs
const copyJobs = [
  {
    src: '/Users/jessefulton/.gemini/antigravity-ide/brain/f8639f05-0803-4774-a08a-260a5c29fc44/thrive_ai_hero_1787634107569.jpg',
    slug: 'thrive-ai-health',
    filename: 'hero.jpg'
  },
  {
    src: '/Users/jessefulton/.gemini/antigravity-ide/brain/f8639f05-0803-4774-a08a-260a5c29fc44/cato_green_ai_hero_1787634121303.jpg',
    slug: 'cato-green-ai',
    filename: 'hero.jpg'
  },
  {
    src: '/Users/jessefulton/Projects/jessefulton.com/public/media/images/swa.png',
    slug: 'software-as-art-thesis',
    filename: 'swa.png'
  },
  {
    src: '/Users/jessefulton/Projects/jessefulton.com/contents/portfolio/drawing-machines/images/prototype1_s.jpg',
    slug: 'software-as-art-thesis',
    filename: 'prototype1.jpg'
  }
];

for (const job of copyJobs) {
  const dir = path.join(basePublicDir, job.slug);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  if (fs.existsSync(job.src)) {
    fs.copyFileSync(job.src, path.join(dir, job.filename));
    console.log(`Copied: ${job.slug}/${job.filename}`);
  }
}

// 2. Notion S3 Downloads
const notionDownloads = [
  // Destiny 2 Ghost Skill
  {
    slug: 'destiny-2-ghost-companion',
    filename: 'hero-02.jpg',
    url: 'https://prod-files-secure.s3.us-west-2.amazonaws.com/17b3dcd1-7217-4942-bd22-ae718ea061bb/1dcb2118-b11f-4747-82c3-7b1845b42df5/hero-02.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UMUHHCS%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T045846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQDOx3O3w7WO9nqX1LrgSw7gEIsKqv57qPH02VjBTfTJXwIhALDifC91ZlR8tSgqKAfEi7SuwjRZF74SfgLqOhlv%2BsGPKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwRz1TmcVza6VWORd0q3AMvIWNB3WnJtUibDcsNlFdKNXfgxWPFzXVkhQl559rXx6Bjoi9FD6W%2BmiPEYgfUc1fEjvdu9Lk78t5k0gAYnPX527g3XGM2lKrhHdbiPEY6Nh3ntpZLU06bKWL3Cgwx5%2F8DJV2FMExAeVkru2aeEQlaLbL8FGdHHt%2FTUXxkmWAWdPw%2FQT970ul73ryGmGFNylemKms5KXRZoJYiu5YnATLQYMYzL3A5tko09gRrlqct7fgVT2JqEFl754Q2v6UM9%2Fpn2cQzqNpsUPEcH3SvJpu8gf0Uarvqs0p1cYsMox%2BfrfR8MwiZN%2FaVDwvvgYDtOOIr5Odw7PKKjyt4igHaHBhPDjINCAm8oi2oydIRbUJm1%2BgyFV6D0BTHPK7mrveLyh56ebDBmy0FpzjdIJJIQdiL6YA5C9j8Szo9RDAHp%2FL9jRYB9SicFpDOunN1HyhX8oD%2Fp%2BGnbgNXLb2KbN8MhExBTpxnhXBdrt0Cs1S8Q%2F4%2BdMkMQvHes4HcHqFchLf5epyjzBthNdIXhqNzFN8PTy1ivs0faEIP5lIQO8aqB1ksiee8MlPr7zgaNph0wbHcI9QFjxqcnOfA1Oe72gxLnhGJXeiJmlHhERtzhfndMmbMEI8ZTNBFgP4J1dMEKzDZ0bPUBjqkAb8gIHb3ARAw95O1VP8WZjO4DWlCKwILtTYT4idbc4BT3GQ%2B6wUDSeymJ09ESgSt2k0lGedGvE1gzMRPUv9yXopX4maRwCtrsUZHOASYi3Nq4HTkBJnw3rK06jZmmbxz6Swk6LdOg1gOy2rNLc%2BiihvgfrNixBPXAkMY%2F3iTk6z3UaWK5MDefQhY6gJXtt%2BO%2B6fzXIeng8%2Fe2t%2BzjCQgd%2FddDdnE&X-Amz-Signature=bd972c127850951a528ebeba46052d5e01a52506859f1b70b68134591f9ef222&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject'
  },
  {
    slug: 'destiny-2-ghost-companion',
    filename: 'hero-01.jpg',
    url: 'https://prod-files-secure.s3.us-west-2.amazonaws.com/17b3dcd1-7217-4942-bd22-ae718ea061bb/c61e1b04-c329-432b-bc65-18ed72f16f0f/hero-01.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UMUHHCS%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T045846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQDOx3O3w7WO9nqX1LrgSw7gEIsKqv57qPH02VjBTfTJXwIhALDifC91ZlR8tSgqKAfEi7SuwjRZF74SfgLqOhlv%2BsGPKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwRz1TmcVza6VWORd0q3AMvIWNB3WnJtUibDcsNlFdKNXfgxWPFzXVkhQl559rXx6Bjoi9FD6W%2BmiPEYgfUc1fEjvdu9Lk78t5k0gAYnPX527g3XGM2lKrhHdbiPEY6Nh3ntpZLU06bKWL3Cgwx5%2F8DJV2FMExAeVkru2aeEQlaLbL8FGdHHt%2FTUXxkmWAWdPw%2FQT970ul73ryGmGFNylemKms5KXRZoJYiu5YnATLQYMYzL3A5tko09gRrlqct7fgVT2JqEFl754Q2v6UM9%2Fpn2cQzqNpsUPEcH3SvJpu8gf0Uarvqs0p1cYsMox%2BfrfR8MwiZN%2FaVDwvvgYDtOOIr5Odw7PKKjyt4igHaHBhPDjINCAm8oi2oydIRbUJm1%2BgyFV6D0BTHPK7mrveLyh56ebDBmy0FpzjdIJJIQdiL6YA5C9j8Szo9RDAHp%2FL9jRYB9SicFpDOunN1HyhX8oD%2Fp%2BGnbgNXLb2KbN8MhExBTpxnhXBdrt0Cs1S8Q%2F4%2BdMkMQvHes4HcHqFchLf5epyjzBthNdIXhqNzFN8PTy1ivs0faEIP5lIQO8aqB1ksiee8MlPr7zgaNph0wbHcI9QFjxqcnOfA1Oe72gxLnhGJXeiJmlHhERtzhfndMmbMEI8ZTNBFgP4J1dMEKzDZ0bPUBjqkAb8gIHb3ARAw95O1VP8WZjO4DWlCKwILtTYT4idbc4BT3GQ%2B6wUDSeymJ09ESgSt2k0lGedGvE1gzMRPUv9yXopX4maRwCtrsUZHOASYi3Nq4HTkBJnw3rK06jZmmbxz6Swk6LdOg1gOy2rNLc%2BiihvgfrNixBPXAkMY%2F3iTk6z3UaWK5MDefQhY6gJXtt%2BO%2B6fzXIeng8%2Fe2t%2BzjCQgd%2FddDdnE&X-Amz-Signature=2a6bf578f0df5de75198d2b772bb2fb1f44c249bc4c865256762650236a51af8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject'
  },
  {
    slug: 'destiny-2-ghost-companion',
    filename: 'hero-03.jpg',
    url: 'https://prod-files-secure.s3.us-west-2.amazonaws.com/17b3dcd1-7217-4942-bd22-ae718ea061bb/58f5d0e7-64a5-49fd-bc44-2cd59fe61615/hero-03.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UMUHHCS%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T045846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQDOx3O3w7WO9nqX1LrgSw7gEIsKqv57qPH02VjBTfTJXwIhALDifC91ZlR8tSgqKAfEi7SuwjRZF74SfgLqOhlv%2BsGPKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwRz1TmcVza6VWORd0q3AMvIWNB3WnJtUibDcsNlFdKNXfgxWPFzXVkhQl559rXx6Bjoi9FD6W%2BmiPEYgfUc1fEjvdu9Lk78t5k0gAYnPX527g3XGM2lKrhHdbiPEY6Nh3ntpZLU06bKWL3Cgwx5%2F8DJV2FMExAeVkru2aeEQlaLbL8FGdHHt%2FTUXxkmWAWdPw%2FQT970ul73ryGmGFNylemKms5KXRZoJYiu5YnATLQYMYzL3A5tko09gRrlqct7fgVT2JqEFl754Q2v6UM9%2Fpn2cQzqNpsUPEcH3SvJpu8gf0Uarvqs0p1cYsMox%2BfrfR8MwiZN%2FaVDwvvgYDtOOIr5Odw7PKKjyt4igHaHBhPDjINCAm8oi2oydIRbUJm1%2BgyFV6D0BTHPK7mrveLyh56ebDBmy0FpzjdIJJIQdiL6YA5C9j8Szo9RDAHp%2FL9jRYB9SicFpDOunN1HyhX8oD%2Fp%2BGnbgNXLb2KbN8MhExBTpxnhXBdrt0Cs1S8Q%2F4%2BdMkMQvHes4HcHqFchLf5epyjzBthNdIXhqNzFN8PTy1ivs0faEIP5lIQO8aqB1ksiee8MlPr7zgaNph0wbHcI9QFjxqcnOfA1Oe72gxLnhGJXeiJmlHhERtzhfndMmbMEI8ZTNBFgP4J1dMEKzDZ0bPUBjqkAb8gIHb3ARAw95O1VP8WZjO4DWlCKwILtTYT4idbc4BT3GQ%2B6wUDSeymJ09ESgSt2k0lGedGvE1gzMRPUv9yXopX4maRwCtrsUZHOASYi3Nq4HTkBJnw3rK06jZmmbxz6Swk6LdOg1gOy2rNLc%2BiihvgfrNixBPXAkMY%2F3iTk6z3UaWK5MDefQhY6gJXtt%2BO%2B6fzXIeng8%2Fe2t%2BzjCQgd%2FddDdnE&X-Amz-Signature=469a80648360f17788c196bb7071482708a6d433625a973bb3f8b83641a0c271&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject'
  },

  // Coinbase Cloud
  {
    slug: 'coinbase-cloud',
    filename: 'marketing-landing-page.png',
    url: 'https://prod-files-secure.s3.us-west-2.amazonaws.com/17b3dcd1-7217-4942-bd22-ae718ea061bb/19814ec0-a599-423f-a6f6-25a05a615161/marketing-landing-page.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SL5Q267O%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T045857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQDmmTtdYxPhR2eH3uCIeZHMI0zJDGkgAf0t%2FTzqw1eTGwIhAKqLVNzYmnN%2FrNSvMX1po9FtOKYy5K%2Fpeh8JGZeTZz3sKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyei9p%2FVq28rBOUzhQq3AM4zz4wuJuD%2F%2BcLePcbVK3HR%2F5tkS73FtO9yHxShgITkPDS4m%2BAM1Y0WCjetfQIqlgdZuV8NqXrbu8ePD4dCbCdTd6Bn3G9kJk3GMG2fe%2B3cOAJD9dRDEpG5u2uVJRkSCgwYSf4h86B5N2LK4S8vOLUGp4fw5DmbTjVzJ%2BnRqO5rbIpn69pweEdWX4mhCgMGcv8hsMV3K2joWNftUC5OH%2BcXtzMV6XrNH%2B7%2BXA0ZPoueB4dCIKxn1R%2FbK84I7FecFhQdQ7opFWB8mJLKrURFshOWgNYwdQzqKSaWKc%2F7XWxaNFiohUu4wv0wVJmhG8hgXBQnHFJsHKfGeb2GAH5cXdpgUoZUU41uRW%2FRVf%2BszV9awXHA2M7Bk4wZb21Y5P%2F4N9onxDv1gYIgqdcuJGgM7W4A1B6GkF9wiWWvuZl%2BPNJeX7eRAsg7JdAfLMDAB5ATDmL7GClWy8rlJscNjhLM2YddEAtQpE1nsaMzM4e87DB5OI7J%2FHIUFm%2FA8IBacmXm5BkPHD3t0BEpgEv3As0HpTWjAoPwhMsoSBOygvb%2FnvnmPhG0N%2FOC%2Bv8ulmfQSdkGV5X%2B2zEdmJCUYiBB7nIbtFAuIol55RDMxXofA5ig6U04Aei7tzlwsGjnQJBczCL1LPUBjqkASXB7jebyD6cJxYXpi8xgN9W0BvljU59aqjznAz8FKr%2BaWCkxMfPclw8OyHgo%2FGGHXIQWLYPI0MEAMpjL4Whj5S9MqSV3%2FcsU9ephjXdqJibX4rUfREbfFoG2oJ577c48z4WczRP76SVT7By37fgAOG5u0RioNywqlKvrSOms3SlqfOko7TNhIQBboBbEJqldpFjR4V%2FV74NVwC1YjTFF%2FqMYN5k&X-Amz-Signature=94eb23906ee805cc47054fc72db4a5dfce22184ef9e96d8b631316b5adeb2159&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject'
  },
  {
    slug: 'coinbase-cloud',
    filename: 'platform-landing-page.png',
    url: 'https://prod-files-secure.s3.us-west-2.amazonaws.com/17b3dcd1-7217-4942-bd22-ae718ea061bb/6f530ae2-7f8b-4f07-a4a3-61048d05e11e/platform-landing-page.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SL5Q267O%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T045857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQDmmTtdYxPhR2eH3uCIeZHMI0zJDGkgAf0t%2FTzqw1eTGwIhAKqLVNzYmnN%2FrNSvMX1po9FtOKYy5K%2Fpeh8JGZeTZz3sKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyei9p%2FVq28rBOUzhQq3AM4zz4wuJuD%2F%2BcLePcbVK3HR%2F5tkS73FtO9yHxShgITkPDS4m%2BAM1Y0WCjetfQIqlgdZuV8NqXrbu8ePD4dCbCdTd6Bn3G9kJk3GMG2fe%2B3cOAJD9dRDEpG5u2uVJRkSCgwYSf4h86B5N2LK4S8vOLUGp4fw5DmbTjVzJ%2BnRqO5rbIpn69pweEdWX4mhCgMGcv8hsMV3K2joWNftUC5OH%2BcXtzMV6XrNH%2B7%2BXA0ZPoueB4dCIKxn1R%2FbK84I7FecFhQdQ7opFWB8mJLKrURFshOWgNYwdQzqKSaWKc%2F7XWxaNFiohUu4wv0wVJmhG8hgXBQnHFJsHKfGeb2GAH5cXdpgUoZUU41uRW%2FRVf%2BszV9awXHA2M7Bk4wZb21Y5P%2F4N9onxDv1gYIgqdcuJGgM7W4A1B6GkF9wiWWvuZl%2BPNJeX7eRAsg7JdAfLMDAB5ATDmL7GClWy8rlJscNjhLM2YddEAtQpE1nsaMzM4e87DB5OI7J%2FHIUFm%2FA8IBacmXm5BkPHD3t0BEpgEv3As0HpTWjAoPwhMsoSBOygvb%2FnvnmPhG0N%2FOC%2Bv8ulmfQSdkGV5X%2B2zEdmJCUYiBB7nIbtFAuIol55RDMxXofA5ig6U04Aei7tzlwsGjnQJBczCL1LPUBjqkASXB7jebyD6cJxYXpi8xgN9W0BvljU59aqjznAz8FKr%2BaWCkxMfPclw8OyHgo%2FGGHXIQWLYPI0MEAMpjL4Whj5S9MqSV3%2FcsU9ephjXdqJibX4rUfREbfFoG2oJ577c48z4WczRP76SVT7By37fgAOG5u0RioNywqlKvrSOms3SlqfOko7TNhIQBboBbEJqldpFjR4V%2FV74NVwC1YjTFF%2FqMYN5k&X-Amz-Signature=119b78266e5f731d02f2c93a2ec609b89f0ee345b321821c7f16210e408f68a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject'
  },

  // Eyegroove
  {
    slug: 'eyegroove-video-platform',
    filename: 'Eyegroove-mockup1.png',
    url: 'https://prod-files-secure.s3.us-west-2.amazonaws.com/17b3dcd1-7217-4942-bd22-ae718ea061bb/e2ccb4ba-6359-4eb6-a4ae-fe45f51b5d64/Eyegroove-mockup1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646R4L42R%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T045908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIF9VN%2FaS3tuPvv9tWr%2BM%2FcJCXv%2Bs1qh94CenlziBX9HLAiAXJRPdyRuKkXPYPNBQYhjonWfIZDWFVtuaFfCvh1ErfSqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvjhXtBCMTYjj%2FX5fKtwDqnNKuDtHIDgjC7KuC%2BqkfSWRm5184exNR3yVEzbBpYJt7U%2B9Bf6vHvu6f1tKge37dK0UMm6GR22yB5H1Qtj%2BnQ%2FDEgtIDkkTSu5F5KtgsWJHw8cjXUjXDq5mBJEGx40OrcZucuM%2FZq6SkGd9ciI4Imw5e6apPoN%2BusHNcEHm%2BQpbrE1DMhm%2BGtNLJixJkb9mbOl%2FcZwgn42piO2J6GPDtc2LQVb5EcP9sOU256%2BT9%2BekEQgFyweRtzcNfSF%2BR0nODSFK8hV1cvoHdMwy1JbRc9Odae9wFZ%2FZBo0xrUKadqGS%2BPQ6RLSI%2Fj2wML2Be2Tle4MeAkf72e3%2Ft88Z1Alf6LOMx6VUfyss%2BG35F004sTCm08I%2FFrV7H47eg2IkpyJtpUBUwPdfggdEgrYm%2FUeSTMo%2Bv1ABPc9eViJJ4YRFN3d3mBHoF6zinCwq%2FZbRQIJANZWrcJ%2BWX8TJ3QAVP5Jmk4OVpAwKGDXgbBaH%2BaISgQIftf14zaa5uwoIOPCBtmXYdrE0h127CU9e33vllZkLAGcCalEQr8sOW2oSQRPYGfoQuKofQMp%2BCJ6P3Gg0aEfyw3iknSsHnO0bbKAlzKtO02PSZ1CvU9VF2BQ2ATbK0blWq9glP3OM%2BGPh3zgwj9Gz1AY6pgEH7eTd37asUCnlyWfIAG1v6OgLJVL8pmD%2BpWkmMzIjDJRAn0Cz3LEIgajL4udEZdofiiVn5dk5RUn3ITEKT93OiSHqhdcPHh975XbRmHgS1TIOW2xyVdr5rLs9nOjnJhnpLE%2F8tmSmTjSyj%2F%2F5GLyMWNvSJ09pWzO7UuXLgxBgsp5uYj3VCHusimECsoW4lwMkXmnpxqV5YlKCB9FJct1%2BXIhvCLb8&X-Amz-Signature=441fe75e48e164c920c8ac113166544f889db597b1ebb30c8e65e10754827d5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject'
  },
  {
    slug: 'eyegroove-video-platform',
    filename: 'eyegroove-logo.png',
    url: 'https://prod-files-secure.s3.us-west-2.amazonaws.com/17b3dcd1-7217-4942-bd22-ae718ea061bb/38579bd4-e164-4215-983a-8bae192aac4c/eyegroove-logo.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646R4L42R%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T045908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIF9VN%2FaS3tuPvv9tWr%2BM%2FcJCXv%2Bs1qh94CenlziBX9HLAiAXJRPdyRuKkXPYPNBQYhjonWfIZDWFVtuaFfCvh1ErfSqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvjhXtBCMTYjj%2FX5fKtwDqnNKuDtHIDgjC7KuC%2BqkfSWRm5184exNR3yVEzbBpYJt7U%2B9Bf6vHvu6f1tKge37dK0UMm6GR22yB5H1Qtj%2BnQ%2FDEgtIDkkTSu5F5KtgsWJHw8cjXUjXDq5mBJEGx40OrcZucuM%2FZq6SkGd9ciI4Imw5e6apPoN%2BusHNcEHm%2BQpbrE1DMhm%2BGtNLJixJkb9mbOl%2FcZwgn42piO2J6GPDtc2LQVb5EcP9sOU256%2BT9%2BekEQgFyweRtzcNfSF%2BR0nODSFK8hV1cvoHdMwy1JbRc9Odae9wFZ%2FZBo0xrUKadqGS%2BPQ6RLSI%2Fj2wML2Be2Tle4MeAkf72e3%2Ft88Z1Alf6LOMx6VUfyss%2BG35F004sTCm08I%2FFrV7H47eg2IkpyJtpUBUwPdfggdEgrYm%2FUeSTMo%2Bv1ABPc9eViJJ4YRFN3d3mBHoF6zinCwq%2FZbRQIJANZWrcJ%2BWX8TJ3QAVP5Jmk4OVpAwKGDXgbBaH%2BaISgQIftf14zaa5uwoIOPCBtmXYdrE0h127CU9e33vllZkLAGcCalEQr8sOW2oSQRPYGfoQuKofQMp%2BCJ6P3Gg0aEfyw3iknSsHnO0bbKAlzKtO02PSZ1CvU9VF2BQ2ATbK0blWq9glP3OM%2BGPh3zgwj9Gz1AY6pgEH7eTd37asUCnlyWfIAG1v6OgLJVL8pmD%2BpWkmMzIjDJRAn0Cz3LEIgajL4udEZdofiiVn5dk5RUn3ITEKT93OiSHqhdcPHh975XbRmHgS1TIOW2xyVdr5rLs9nOjnJhnpLE%2F8tmSmTjSyj%2F%2F5GLyMWNvSJ09pWzO7UuXLgxBgsp5uYj3VCHusimECsoW4lwMkXmnpxqV5YlKCB9FJct1%2BXIhvCLb8&X-Amz-Signature=97dca3ac93d6d1929dcb068645001fe50e93db119c5d5a3aaef290d9e999d9e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject'
  },

  // My Disney Experience
  {
    slug: 'my-disney-experience',
    filename: 'magic-band.png',
    url: 'https://prod-files-secure.s3.us-west-2.amazonaws.com/17b3dcd1-7217-4942-bd22-ae718ea061bb/8eede198-9b0b-4175-ac9e-8b6b45b3d468/magic-band.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UTQNITB%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T045908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIAHrvMKy2RYdHHYwTARxuT2QA5nOoWaHjfNBqp9A2gYVAiBOQxFhKfbKXc3z9AkucGvjKL1BTCgm%2BA%2Bd9eQ8kQd%2B%2ByqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLTg3s6hyEygFzWYKKtwDn3%2Bkl8qpIuGNGhSmhFDKBwhY0odi9oXpZBuOFaJvC16RDzb93OXeCXb2z3YaG16oD4UaaquOvSo2AjaCqqkbPbYlw3P%2BzJ3jFjBFCn%2F%2BxDHQfrm9Y3Y%2Fang9z3R%2FE9Q%2Bmu1Wczw0hE%2FRBNNTy3wfZwk6vipuzxImcMXu6Zi9tDOz76j04LvZ3bsrIFWnQVfYp7vS3V5N5pVt7e11%2FVOosj98QYC72oSBOBY9u%2FfOp1ly7CYwlntSPKC49kzl5DXhZJ754bRHepGL30F%2B%2FJ%2FoIgLfemfCNFs%2BAdnhVsX4U61oDeulyb7dDfnrGP4BT3OnRt8v2MooG%2FBrd%2FF6GDNm0KobQOwvCjHTSJhamIEHsNHdMdG6blhm%2FhjmDhZ9PS77I5nA0k86M74Y7pX1j2JQFVTa%2B7uNbJdvyw7pFktCltHJioO%2BhoPqTxIduArkrYhRqg9dnbAeSuinT7WYzOARnaC%2BalmeJD4n5eJ6wOGfcDPPjBHpxDlH5OwwIfiNVvtcQ6kG9GB2rw27PbDNTn1U5rin%2FXL4Y5E8nA%2FyWs4BK8Ikt%2BV1bJ5O8NmvLm8oeZ6kLOOansDBBHZulF5dpR2YfUiexPnZJxDkGgtgUeFKzPr0XJ4j7wzHj02lxoMw6dGz1AY6pgFOWwU2L57Zdq7MSCHn4QCXhIt0IR9ejxqFFZMOgm6%2BIew47a97X2vRI%2BNN3kzjacwgM8zaTmtRXoU2pE7dJ1R4AmyT9dABsqRmWDPRoXVVFBR0k7p7RnhMmlyrUf5mnTUrZS5mcyfahuyfOFa526X8MEOBfLNhJSgo0KJDjm8M%2BjquAwxYGvtqZ0uGooWL6uFN%2FrmhQeIYvPP8%2FFmTpS4r3GuUmGzj&X-Amz-Signature=209386219588056e40c8d68037bc25b93688e80bddd4a42d8e4b082a8741d70c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject'
  },
  {
    slug: 'my-disney-experience',
    filename: 'hkdl-1_l.jpg',
    url: 'https://prod-files-secure.s3.us-west-2.amazonaws.com/17b3dcd1-7217-4942-bd22-ae718ea061bb/18ef2947-5fa8-491b-8996-d2b40518126f/hkdl-1_l.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UTQNITB%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T045908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIAHrvMKy2RYdHHYwTARxuT2QA5nOoWaHjfNBqp9A2gYVAiBOQxFhKfbKXc3z9AkucGvjKL1BTCgm%2BA%2Bd9eQ8kQd%2B%2ByqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLTg3s6hyEygFzWYKKtwDn3%2Bkl8qpIuGNGhSmhFDKBwhY0odi9oXpZBuOFaJvC16RDzb93OXeCXb2z3YaG16oD4UaaquOvSo2AjaCqqkbPbYlw3P%2BzJ3jFjBFCn%2F%2BxDHQfrm9Y3Y%2Fang9z3R%2FE9Q%2Bmu1Wczw0hE%2FRBNNTy3wfZwk6vipuzxImcMXu6Zi9tDOz76j04LvZ3bsrIFWnQVfYp7vS3V5N5pVt7e11%2FVOosj98QYC72oSBOBY9u%2FfOp1ly7CYwlntSPKC49kzl5DXhZJ754bRHepGL30F%2B%2FJ%2FoIgLfemfCNFs%2BAdnhVsX4U61oDeulyb7dDfnrGP4BT3OnRt8v2MooG%2FBrd%2FF6GDNm0KobQOwvCjHTSJhamIEHsNHdMdG6blhm%2FhjmDhZ9PS77I5nA0k86M74Y7pX1j2JQFVTa%2B7uNbJdvyw7pFktCltHJioO%2BhoPqTxIduArkrYhRqg9dnbAeSuinT7WYzOARnaC%2BalmeJD4n5eJ6wOGfcDPPjBHpxDlH5OwwIfiNVvtcQ6kG9GB2rw27PbDNTn1U5rin%2FXL4Y5E8nA%2FyWs4BK8Ikt%2BV1bJ5O8NmvLm8oeZ6kLOOansDBBHZulF5dpR2YfUiexPnZJxDkGgtgUeFKzPr0XJ4j7wzHj02lxoMw6dGz1AY6pgFOWwU2L57Zdq7MSCHn4QCXhIt0IR9ejxqFFZMOgm6%2BIew47a97X2vRI%2BNN3kzjacwgM8zaTmtRXoU2pE7dJ1R4AmyT9dABsqRmWDPRoXVVFBR0k7p7RnhMmlyrUf5mnTUrZS5mcyfahuyfOFa526X8MEOBfLNhJSgo0KJDjm8M%2BjquAwxYGvtqZ0uGooWL6uFN%2FrmhQeIYvPP8%2FFmTpS4r3GuUmGzj&X-Amz-Signature=0e98a9d9625fc0810c03cb091b4c58925c545a60063f738d1366283112aca40c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject'
  },
  {
    slug: 'my-disney-experience',
    filename: 'dcl-1_l.jpg',
    url: 'https://prod-files-secure.s3.us-west-2.amazonaws.com/17b3dcd1-7217-4942-bd22-ae718ea061bb/fc8686ca-276b-4317-ac5e-ad81d8f18577/dcl-1_l.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UTQNITB%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T045908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIAHrvMKy2RYdHHYwTARxuT2QA5nOoWaHjfNBqp9A2gYVAiBOQxFhKfbKXc3z9AkucGvjKL1BTCgm%2BA%2Bd9eQ8kQd%2B%2ByqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLTg3s6hyEygFzWYKKtwDn3%2Bkl8qpIuGNGhSmhFDKBwhY0odi9oXpZBuOFaJvC16RDzb93OXeCXb2z3YaG16oD4UaaquOvSo2AjaCqqkbPbYlw3P%2BzJ3jFjBFCn%2F%2BxDHQfrm9Y3Y%2Fang9z3R%2FE9Q%2Bmu1Wczw0hE%2FRBNNTy3wfZwk6vipuzxImcMXu6Zi9tDOz76j04LvZ3bsrIFWnQVfYp7vS3V5N5pVt7e11%2FVOosj98QYC72oSBOBY9u%2FfOp1ly7CYwlntSPKC49kzl5DXhZJ754bRHepGL30F%2B%2FJ%2FoIgLfemfCNFs%2BAdnhVsX4U61oDeulyb7dDfnrGP4BT3OnRt8v2MooG%2FBrd%2FF6GDNm0KobQOwvCjHTSJhamIEHsNHdMdG6blhm%2FhjmDhZ9PS77I5nA0k86M74Y7pX1j2JQFVTa%2B7uNbJdvyw7pFktCltHJioO%2BhoPqTxIduArkrYhRqg9dnbAeSuinT7WYzOARnaC%2BalmeJD4n5eJ6wOGfcDPPjBHpxDlH5OwwIfiNVvtcQ6kG9GB2rw27PbDNTn1U5rin%2FXL4Y5E8nA%2FyWs4BK8Ikt%2BV1bJ5O8NmvLm8oeZ6kLOOansDBBHZulF5dpR2YfUiexPnZJxDkGgtgUeFKzPr0XJ4j7wzHj02lxoMw6dGz1AY6pgFOWwU2L57Zdq7MSCHn4QCXhIt0IR9ejxqFFZMOgm6%2BIew47a97X2vRI%2BNN3kzjacwgM8zaTmtRXoU2pE7dJ1R4AmyT9dABsqRmWDPRoXVVFBR0k7p7RnhMmlyrUf5mnTUrZS5mcyfahuyfOFa526X8MEOBfLNhJSgo0KJDjm8M%2BjquAwxYGvtqZ0uGooWL6uFN%2FrmhQeIYvPP8%2FFmTpS4r3GuUmGzj&X-Amz-Signature=477a9b92a7d6cc52bb42c2fdb2da15c294f170aa9169652d9fc697922f5b9a71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject'
  },

  // Terminal Tours
  {
    slug: 'terminal-tours',
    filename: 'featured-Image10055234.jpg',
    url: 'https://prod-files-secure.s3.us-west-2.amazonaws.com/17b3dcd1-7217-4942-bd22-ae718ea061bb/a31fa5c2-4eab-4ea4-b22d-bd3340a539b2/featured-Image10055234.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOEBFETY%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T045959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIClB5BqiI5b2iT%2FnKQlvSaiDKkoaGRsQSr7H3FJGVscvAiAEpBbUXbpMnMp0VHqgIgyrca%2F6dCEkYiiLSPsROr80xSqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3lfmuYueHIX7MsFXKtwDm8POcn1SHjQSxuQfVBn4LsVCN9DRowb0Xw4JWCTpLN%2B5gLKsPp7wQ%2FSMDvofd3LYvbbaZHrGlVDIUE7KjwXGQY8Gz489FmQv9BuMOTTemkYEvcouJdhhErCVHhgFGCuuaB%2BiQgSMxvplRH%2BGnXDWFLDRtsQx5jUQkj%2FgYKJO1OuRm%2BFVVnUZV1J709MT9uIEwqGG2yv2on5ssKwl1aifgVGFXdTqiTwWAfn27izzsWaqJtWLWzzO0hNXPsiANydbKR3T1cfybPhGOlR4XE2N1RDZuA8f9zR7hR8JOwa8vfImNSHxwOc9B4o5V%2BOdICAfvPrrIMyisnBFabHCx9UhgpyW8urDIopFqJFl3lIJQdPw1FyCqILpxay7nebPJCQWuA69dygZSGtU7REeX2N31QZJEGSP1K60oLZYGo8j2tQqd3MbRPV0KLx%2FUercS0pH9zCifvyL9ihmT%2FUMJzw2VXTaDyCnNoaxzEETfVXz5myYzJf9dU7bnU9UsuG3aQvRv9V0alAUjwqCmtN19b0vPSheB%2B2tQlI%2B0a9XwPr1XR%2BUiorJc4QAGf6PjyFZjSawis2%2BfvdA%2F2TkMP73Lw2KDKDVIK9VENh38MJZSOs6H19KiPlQO5H2hMikrMQw6tCz1AY6pgF46ke%2BU5Mr%2BOOeEfplA8y2dnDuWJpGUAo6MSGM8reelGDMOZh6vQv1Z48P2gJQwLqYHvdB3a9pn3Uf%2FItTBcux5skfyAavnRAckugQZ3XhvZn9EHHfaJuwB3J8%2F3sM2d4mT6LLJUmhOg4yRkPO3I18fLtxcVCcZpNRbpp4VdkfAiibBVEXg7Sx7MVGFMm%2BziSAX13wuUSeBxUxzVTZoUJzxKqnzIte&X-Amz-Signature=e4a5b451f685affb517419bcf55fa1fb88659c7a451f3ce0465fe1f60e7186e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject'
  },
  {
    slug: 'terminal-tours',
    filename: '10055234-TT_Interact2.jpg',
    url: 'https://prod-files-secure.s3.us-west-2.amazonaws.com/17b3dcd1-7217-4942-bd22-ae718ea061bb/036f73dc-d7ce-421c-9f7d-a51e2aad1747/10055234-TT_Interact2.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOEBFETY%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T045959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIClB5BqiI5b2iT%2FnKQlvSaiDKkoaGRsQSr7H3FJGVscvAiAEpBbUXbpMnMp0VHqgIgyrca%2F6dCEkYiiLSPsROr80xSqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3lfmuYueHIX7MsFXKtwDm8POcn1SHjQSxuQfVBn4LsVCN9DRowb0Xw4JWCTpLN%2B5gLKsPp7wQ%2FSMDvofd3LYvbbaZHrGlVDIUE7KjwXGQY8Gz489FmQv9BuMOTTemkYEvcouJdhhErCVHhgFGCuuaB%2BiQgSMxvplRH%2BGnXDWFLDRtsQx5jUQkj%2FgYKJO1OuRm%2BFVVnUZV1J709MT9uIEwqGG2yv2on5ssKwl1aifgVGFXdTqiTwWAfn27izzsWaqJtWLWzzO0hNXPsiANydbKR3T1cfybPhGOlR4XE2N1RDZuA8f9zR7hR8JOwa8vfImNSHxwOc9B4o5V%2BOdICAfvPrrIMyisnBFabHCx9UhgpyW8urDIopFqJFl3lIJQdPw1FyCqILpxay7nebPJCQWuA69dygZSGtU7REeX2N31QZJEGSP1K60oLZYGo8j2tQqd3MbRPV0KLx%2FUercS0pH9zCifvyL9ihmT%2FUMJzw2VXTaDyCnNoaxzEETfVXz5myYzJf9dU7bnU9UsuG3aQvRv9V0alAUjwqCmtN19b0vPSheB%2B2tQlI%2B0a9XwPr1XR%2BUiorJc4QAGf6PjyFZjSawis2%2BfvdA%2F2TkMP73Lw2KDKDVIK9VENh38MJZSOs6H19KiPlQO5H2hMikrMQw6tCz1AY6pgF46ke%2BU5Mr%2BOOeEfplA8y2dnDuWJpGUAo6MSGM8reelGDMOZh6vQv1Z48P2gJQwLqYHvdB3a9pn3Uf%2FItTBcux5skfyAavnRAckugQZ3XhvZn9EHHfaJuwB3J8%2F3sM2d4mT6LLJUmhOg4yRkPO3I18fLtxcVCcZpNRbpp4VdkfAiibBVEXg7Sx7MVGFMm%2BziSAX13wuUSeBxUxzVTZoUJzxKqnzIte&X-Amz-Signature=06e54323567f7ea5eddd1cb30f39d4167fd52ce06a4a0ea1acb637d7b13cd468&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject'
  },

  // PwC Sightline
  {
    slug: 'pwc-enterprise-alignment',
    filename: 'Screenshot_2024-01-09_153637.png',
    url: 'https://prod-files-secure.s3.us-west-2.amazonaws.com/17b3dcd1-7217-4942-bd22-ae718ea061bb/2647a474-0b2a-41a1-8b2d-ad356473b0f7/Screenshot_2024-01-09_153637.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MD7ZJT2%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T050009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQCCAl3KshcgciFQcnXPjwVRquLGVCXpUaJTTA%2BwpYZuWQIhAOhW01gTcJ3tlT1XjKtfSQ9p7o3fPT59Hdv3dsceUhAVKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxSXjPpqL0u9pt7lE8q3AO1yXHRB7F8vJHc%2FW10sYoTGiFk7u97jQqOWo5XfjDABuGuir4mM8l3%2BJJC1EM6gyhwxgrYOZb287sL7YPqwnhol%2BGaITaSa97v1VbYhECiSTwI5AYMgqpDDBfkjZOSQhHT7WpMhGWuRM4cHvWWNNigjQrrrsdRWmJh15%2Fz8ZykAHEwjQ9HCDMAezNVQEF%2FV4Hmg3XG0flGtOGlRtLjKthdMQVfYSuPRAn8TuokmIGAnLveW0JBDTYDbYXRLNYHt9j%2FzFwHSCHU4WC3hWa%2FwBCGsou95WCfw63NU8BajIa7pFgrCZHJ310CJskKreKhg%2FeU53e7hiLQ1y8KertJh0UywsPqA2ht2bT%2Be5EiYZ8aD0C8IxTZuNIPJCiqRihk4%2BgCP%2FlhjP0P0TKXihx3WBSfKUo8EbZHCHOuLdw1b1bKWR5gzY2gklEBz3pkTFI%2B6KK0CAscH33Z4WgitMpxzxw7g%2FlTHF%2F49zjRY22DuriPHvObXBDTwx4VXC0szcO6J6Pxawfa4Zu1I7Syyd4dRMpAPnxc1cw1VP3u9SWRCs2OYT9cbxpDqZBBSae0z0LiO8x1iJYTZxjQRz1zQGS0kozUxd2ilIc2wdre95Ilcq8HQ48qGc0rt21wbD69jCv1LPUBjqkAVF8poSRQT8ovk%2BG9r6GBIYhbCgxjcbFMwV1TcW1Wz6vOjtVENvijhDo9w0UDB5xTSEdegFKkLe69yx5PW8sSvETJhjROIgxXdhnCmpooC%2F4c2siXKqHtaG77aTvOcIibs8wJaMBSUbuSMFEkVEfeDMQgU0%2BymORvmICsygMEqqggmUk6PgnCTohHWwCld3j%2FUeQw0dgMYtcUonNzv0n%2FDAznITF&X-Amz-Signature=45d36567c6e4cc7efe9683192dc2ac7ce822be4f10d93b48a5cd23295135726a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject'
  },
  {
    slug: 'pwc-enterprise-alignment',
    filename: 'overview.png',
    url: 'https://prod-files-secure.s3.us-west-2.amazonaws.com/17b3dcd1-7217-4942-bd22-ae718ea061bb/eb6f7fcb-a806-47d9-ab59-49666a389ee9/overview.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MD7ZJT2%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T050009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQCCAl3KshcgciFQcnXPjwVRquLGVCXpUaJTTA%2BwpYZuWQIhAOhW01gTcJ3tlT1XjKtfSQ9p7o3fPT59Hdv3dsceUhAVKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxSXjPpqL0u9pt7lE8q3AO1yXHRB7F8vJHc%2FW10sYoTGiFk7u97jQqOWo5XfjDABuGuir4mM8l3%2BJJC1EM6gyhwxgrYOZb287sL7YPqwnhol%2BGaITaSa97v1VbYhECiSTwI5AYMgqpDDBfkjZOSQhHT7WpMhGWuRM4cHvWWNNigjQrrrsdRWmJh15%2Fz8ZykAHEwjQ9HCDMAezNVQEF%2FV4Hmg3XG0flGtOGlRtLjKthdMQVfYSuPRAn8TuokmIGAnLveW0JBDTYDbYXRLNYHt9j%2FzFwHSCHU4WC3hWa%2FwBCGsou95WCfw63NU8BajIa7pFgrCZHJ310CJskKreKhg%2FeU53e7hiLQ1y8KertJh0UywsPqA2ht2bT%2Be5EiYZ8aD0C8IxTZuNIPJCiqRihk4%2BgCP%2FlhjP0P0TKXihx3WBSfKUo8EbZHCHOuLdw1b1bKWR5gzY2gklEBz3pkTFI%2B6KK0CAscH33Z4WgitMpxzxw7g%2FlTHF%2F49zjRY22DuriPHvObXBDTwx4VXC0szcO6J6Pxawfa4Zu1I7Syyd4dRMpAPnxc1cw1VP3u9SWRCs2OYT9cbxpDqZBBSae0z0LiO8x1iJYTZxjQRz1zQGS0kozUxd2ilIc2wdre95Ilcq8HQ48qGc0rt21wbD69jCv1LPUBjqkAVF8poSRQT8ovk%2BG9r6GBIYhbCgxjcbFMwV1TcW1Wz6vOjtVENvijhDo9w0UDB5xTSEdegFKkLe69yx5PW8sSvETJhjROIgxXdhnCmpooC%2F4c2siXKqHtaG77aTvOcIibs8wJaMBSUbuSMFEkVEfeDMQgU0%2BymORvmICsygMEqqggmUk6PgnCTohHWwCld3j%2FUeQw0dgMYtcUonNzv0n%2FDAznITF&X-Amz-Signature=61dc92de8ed20027dccd381d827df5055b11fb73683e598832d5f9af97784020&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject'
  },

  // Nike SwooshID & LunarEpic
  {
    slug: 'nike-jordan-retail',
    filename: 'swooshid-portland.png',
    url: 'https://prod-files-secure.s3.us-west-2.amazonaws.com/17b3dcd1-7217-4942-bd22-ae718ea061bb/9b61d8c2-1284-4663-8b90-c4f6d0246d6c/portland.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKEGLFHA%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T045921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIFL2oA7I8a8gvSHF3UK6DRHHBzTTxQyGrYlvrih8aLZNAiAWm9QLpIhwE3J%2FRYJ1cqOyWfSeovMeSUkK93Q0FZ%2FioiqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMb0rBipJYAXHYU%2Fl9KtwDcbI7LwNuU1MYxTTiTEHzbTJfFLhU93PRHjnOoKjhjgW66moOa3Mo3e7zOs08aoKPGWbPwD%2BUKzei22JPDmNgcSTLRrV0iL9zArMS3GzplQz%2Ber16Bs2s6ZUJQJQPZclb9rcr8%2Fnx6H7KAXEapj7KNCpPaoSD047IJc5yQ1CMXvAglPgEfpvvXNB4oA3Nnsa7Mx2o3I4qlq1XqF6RvtiRNeR1U%2F7pWZiJCDJoNNYBpGVYE58c1l9%2Bnj2YDr0GPPYmvjv23QSHrNgLBBP9dlPG4o%2B1uDI4FT3Oc%2FLt1EeXUSTLXgdqINrYTUd288mM7Kpdc3F%2B9lGaW9MjTDepb2om2pW7ywWeSZIQIOTQGXGXNyRDjy8z4tYaQr1BpVOd34DaGwHZbRM2C3N%2BgNeZRfEck6Yf3cgVfJBPpl%2FLTVpqMbwPIUPaFw%2BsMiTPNzu0qjp9%2FDl3iNH1HLWAloxz%2Bx%2BvcnlPIc5qgTmFEM65tnAaXEJcYDTyJB%2Fo9xrPFzdArCveE3j%2BrSXvffi7BrQqQ%2BH5uUs%2B7TH7xueXrhIEoPv2LB7kIxvKRQdu0r0edYhzKacTi3SRVy5Lmqg86m5I5SCxPv5qt2GWU71jPKieZEwyBrydVBPLPFTZUt5dWCYwhdGz1AY6pgG56PHwesRoXnb3XbQfZpj30iu1P3M3sOG%2BTAiLlB1p%2Ber2FWfRik4xHpNRjBnxm8lelLFC%2FkFg8mrN5q%2FmF4Ds8nHnvyAZgd1iBG822bXJSKZDllwo85VgWnbJkcUbDLVdxfE2rxt%2Ffh%2FtPCTDsXkoWoQLg9fkpXHgMiPqctqykwWwKKZwJgWjw60IpI2ztOBqbHLuEa9leB4V5cbnh31VlWad8fbE&X-Amz-Signature=98257af68d6e814af1d6775d3a87fa47f93cd4433a2c866c7cecac9393c5bce6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject'
  },
  {
    slug: 'nike-jordan-retail',
    filename: 'lunarepic-blackburn.jpg',
    url: 'https://prod-files-secure.s3.us-west-2.amazonaws.com/17b3dcd1-7217-4942-bd22-ae718ea061bb/ac63eba6-8782-42cb-b5d9-f658d013baca/Nike-LunarEpic-Launch-BLACKBURN_1000.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKEGLFHA%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T045921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIFL2oA7I8a8gvSHF3UK6DRHHBzTTxQyGrYlvrih8aLZNAiAWm9QLpIhwE3J%2FRYJ1cqOyWfSeovMeSUkK93Q0FZ%2FioiqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMb0rBipJYAXHYU%2Fl9KtwDcbI7LwNuU1MYxTTiTEHzbTJfFLhU93PRHjnOoKjhjgW66moOa3Mo3e7zOs08aoKPGWbPwD%2BUKzei22JPDmNgcSTLRrV0iL9zArMS3GzplQz%2Ber16Bs2s6ZUJQJQPZclb9rcr8%2Fnx6H7KAXEapj7KNCpPaoSD047IJc5yQ1CMXvAglPgEfpvvXNB4oA3Nnsa7Mx2o3I4qlq1XqF6RvtiRNeR1U%2F7pWZiJCDJoNNYBpGVYE58c1l9%2Bnj2YDr0GPPYmvjv23QSHrNgLBBP9dlPG4o%2B1uDI4FT3Oc%2FLt1EeXUSTLXgdqINrYTUd288mM7Kpdc3F%2B9lGaW9MjTDepb2om2pW7ywWeSZIQIOTQGXGXNyRDjy8z4tYaQr1BpVOd34DaGwHZbRM2C3N%2BgNeZRfEck6Yf3cgVfJBPpl%2FLTVpqMbwPIUPaFw%2BsMiTPNzu0qjp9%2FDl3iNH1HLWAloxz%2Bx%2BvcnlPIc5qgTmFEM65tnAaXEJcYDTyJB%2Fo9xrPFzdArCveE3j%2BrSXvffi7BrQqQ%2BH5uUs%2B7TH7xueXrhIEoPv2LB7kIxvKRQdu0r0edYhzKacTi3SRVy5Lmqg86m5I5SCxPv5qt2GWU71jPKieZEwyBrydVBPLPFTZUt5dWCYwhdGz1AY6pgG56PHwesRoXnb3XbQfZpj30iu1P3M3sOG%2BTAiLlB1p%2Ber2FWfRik4xHpNRjBnxm8lelLFC%2FkFg8mrN5q%2FmF4Ds8nHnvyAZgd1iBG822bXJSKZDllwo85VgWnbJkcUbDLVdxfE2rxt%2Ffh%2FtPCTDsXkoWoQLg9fkpXHgMiPqctqykwWwKKZwJgWjw60IpI2ztOBqbHLuEa9leB4V5cbnh31VlWad8fbE&X-Amz-Signature=f107cb5140e2083bc7c4780a36180c25ba3fd03d4fe2bedc600a7f685f1b2864&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject'
  }
];

async function syncAll() {
  for (const item of notionDownloads) {
    const dir = path.join(basePublicDir, item.slug);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    const dest = path.join(dir, item.filename);

    try {
      console.log(`Fetching ${item.slug}/${item.filename}...`);
      const res = await fetch(item.url);
      if (res.ok) {
        const buffer = Buffer.from(await res.arrayBuffer());
        fs.writeFileSync(dest, buffer);
        console.log(`Saved: ${dest} (${buffer.length} bytes)`);
      } else {
        console.warn(`Failed (${res.status}): ${item.filename}`);
      }
    } catch (e) {
      console.error(`Error on ${item.filename}:`, e.message);
    }
  }
}

syncAll();
