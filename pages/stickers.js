import Link from "next/link";
import React from "react";

function Stickers() {
  return (
    <div>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -m-4">
            <Link href={"/product/kuch-bhi"}>
              <div class="lg:w-1/4 md:w-1/2 p-4 w-full cursor-pointer shadow-lg m-2">
                <a class="block relative rounded overflow-hidden">
                  <img alt="ecommerce" class="m-auto h-[30vh] md:h-[36vh] block" src="https://m.media-amazon.com/images/I/81qeMLf1CaL._UY879_.jpg" />
                </a>
                <div class="mt-4 text-center md:text-left">
                  <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                  <h2 class="text-gray-900 title-font text-lg font-medium">T-Shirts</h2>
                  <p class="mt-1">₹16.00</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Stickers;
