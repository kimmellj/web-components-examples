customElements.define('product-tile',
  class extends HTMLElement {
    constructor() {
      super();

      const template = document.getElementById('product-tile');
      const templateContent = template.content;

      this.attachShadow({mode: 'open'}).appendChild(
        templateContent.cloneNode(true)
      );
    }
  }
);

// const slottedSpan = document.querySelector('product-tile span');

// console.log(slottedSpan.assignedSlot);
// console.log(slottedSpan.slot);

var sampleProductTile = `
    <div class="col-auto">
        <product-tile class="card">
            <img slot="product-image" class="product-tile__image" src="https://image.shutterstock.com/image-illustration/computer-generated-render-generic-shoe-450w-36231955.jpg" />
            <div slot="product-name" class="h3">Some Product Name</div>
            <div slot="product-price">$79.99 <s>$120.00</s></div>
            <div slot="product-ratings">3.3 out 5 stars</div>
            <button slot="product-cta" class="btn btn-primary">Add to Cart</button>
        </product-tile>
    </div>
`;

for (let i = 0; i < 100; i++) {
    document.getElementById('product-list').insertAdjacentHTML('beforeend', sampleProductTile);
}
