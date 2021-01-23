import puppetteer from 'puppeteer';

jest.setTimeout(30000); // default puppeteer timeout

describe('Форма проверки карты', () => {
  let browser = null;
  let page = null;
  const baseUrl = 'http://localhost:8080';

  beforeAll(async () => {
    browser = await puppetteer.launch({
      headless: false, // show gui
      slowMo: 500,
      devtools: true, // show devTools
    });
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
  });

  test('должен добавить .valid к правильной карте', async () => {
    await page.goto(baseUrl);
    const form = await page.$('[data-widget=innogrn-form-widget]');
    const input = await form.$('[data-id=innogrn-input]');
    await input.type('4111111111111111');
    const submit = await form.$('[data-id=innogrn-submit]');
    submit.click();
    await page.waitFor('[data-id=innogrn-input].valid');
  });

  test('должен отобразить innerHTML в блоке about', async () => {
    await page.goto(baseUrl);
    const form = await page.$('[data-widget=innogrn-form-widget]');
    const input = await form.$('[data-id=innogrn-input]');
    const about = await form.$('[data-id=innogrn-about]');
    await input.type('2111111111111111');
    await about.innerHTML;
  });
});
