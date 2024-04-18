function ReactFragment() {
  //   const name = null;
  const name = 'Maricris';

  return (
    <div>
      <h1>Hello {2 + 2}!</h1>
      {name ? (
        <>
          <h1>{name}</h1>
        </>
      ) : (
        <>
          <h1>test</h1>
          <h2>There is no name</h2>
        </>
      )}
    </div>
  );
}

export default ReactFragment;
