import productFeature from "../components/product-feature";

const HomePage = {
  print: () => `
    <div class="bg-white">
      <div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 class="text-2xl font-extrabold tracking-tight text-gray-900">
          Customers also purchased
        </h2>
        <div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          ${productFeature.print()}
        </div>
      </div>
    </div>
  `,
};

export default HomePage;
