import { Selector } from 'testcafe';

fixture `My fixture`
    .page `https://chrisbateman.github.io/guide-to-web-components/demos/shadow-dom.htm`;

const paragraph = Selector(() => {
    return document.querySelector('#demo1').shadowRoot.querySelectorAll('p');
});

test('Get text within shadowroot', async t => {
    await t.click(paragraph.nth(0));

    await t.expect(paragraph.nth(0).textContent).eql('These paragraphs are in a shadow root.');
});
