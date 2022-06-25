import Directory from './components/directory/directory.component'

const App = () => {
  const categories = [
    {
      id: 1,
      title: "GPUs",
      imageUrl: "https://cdn.dooca.store/107/products/dx6hr51rghkvbxr5tuw5zotjjjybw6km610b_1600x1600+fill_ffffff.png"
    },
    {
      id: 2,
      title: "CPUs",
      imageUrl: "https://cdn.dooca.store/107/products/dx6hr51rghkvbxr5tuw5zotjjjybw6km610b_1600x1600+fill_ffffff.png"
    },
    {
      id: 3,
      title: "Memory",
      imageUrl: "https://cdn.dooca.store/107/products/dx6hr51rghkvbxr5tuw5zotjjjybw6km610b_1600x1600+fill_ffffff.png"
    },
    {
      id: 4,
      title: "Cases",
      imageUrl: "https://cdn.dooca.store/107/products/dx6hr51rghkvbxr5tuw5zotjjjybw6km610b_1600x1600+fill_ffffff.png"
    },
    {
      id: 5,
      title: "Other",
      imageUrl: "https://cdn.dooca.store/107/products/dx6hr51rghkvbxr5tuw5zotjjjybw6km610b_1600x1600+fill_ffffff.png"
    },
  ];

  return (
    <Directory categories={categories}/>
  );
}

export default App;
