import { expect } from 'chai';


fixture `Resize`
    .page('https://google.com');

test('Resize test', async t => {
    await t.resizeWindow(800, 600);

    var newSize = await t.eval(() => ({
        width:  window.innerWidth,
        height: window.innerHeight
    }));

    expect(newSize.width).to.be.equal(800);
    expect(newSize.height).to.be.equal(600);
});
