const Root = () => {
  return (
    <>
      You can edit your package in:
      <pre>packages\theme-king\src\index.js</pre>
    </>
  );
};

export default {
  name: "theme-king",
  roots: {
    theme: Root
  },
  state: {
    theme: {}
  },
  actions: {
    theme: {}
  }
};
