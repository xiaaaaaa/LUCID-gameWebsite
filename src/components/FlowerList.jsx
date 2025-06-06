import FlowerItems from "./FlowerItems";

function FlowerList({ products }) {
    return (
        // <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-4 content">
        //     {products.map((product) => (
        //         <FlowerItems key={product.id} product={product} />
        //     ))}
        // </div>
        <div className="grid grid-cols-4 gap-4 content">
            {products.map((product) => (
                <FlowerItems key={product.id} product={product} />
            ))}
        </div>
    );
}

export default FlowerList;
