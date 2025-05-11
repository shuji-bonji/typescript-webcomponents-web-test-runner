import { fixture, expect, html } from '@open-wc/testing';
import './sample-component';

describe('SampleComponent', () => {
  it('初期状態で "Hello, Web Test Runner!" と表示されること', async () => {
    const el = await fixture(html`<sample-component></sample-component>`);
    const p = el.shadowRoot!.querySelector('p');
    expect(p?.textContent).to.equal('Hello, Web Test Runner!');
  });

  it('属性が変更された場合、内容が更新されること', async () => {
    const el = await fixture(html`<sample-component message="Updated Message"></sample-component>`);
    const p = el.shadowRoot!.querySelector('p');
    expect(p?.textContent).to.equal('Updated Message');
  });
});