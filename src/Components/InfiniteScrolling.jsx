import React, { useEffect, useRef, useState } from "react";

function InfiniteScrolling() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const loaderRef = useRef(null);

  // Fetch Data
  const fetchProducts = async () => {
    try {
      const res = await fetch(
        `https://dummyjson.com/products?limit=100&skip=${
          (page - 1) * 10
        }`
      );

      const data = await res.json();

      setProducts((prev) => [...prev, ...data.products]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [page]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const target = entries[0];

        if (target.isIntersecting) {
          setPage((prev) => prev + 1);
        }
      },
      {
        threshold: 1,
      }
    );

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => {
      if (loaderRef.current) {
        observer.unobserve(loaderRef.current);
      }
    };
  }, []);

  return (
    <div>
      <h2>Infinite Scroll</h2>

      {products.map((item) => (
        <div
          key={item.id}
          style={{
            border: "1px solid black",
            margin: "10px",
            padding: "10px",
          }}
        >
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      ))}

      {/* Observer Target */}
      <div ref={loaderRef} style={{ height: "50px" }}>
        Loading...
      </div>
    </div>
  );
}

export {InfiniteScrolling};