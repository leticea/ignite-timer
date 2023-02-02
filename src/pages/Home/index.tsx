export function Home() {
  return (
    <div>
      <form action="">
        <div>
          <label htmlFor="task">Vou trabalhar em</label>
          <input type="task" />

          <label htmlFor="minutesAmount">durante</label>
          <input type="number" id="minutesAmount" />

          <span>minutos.</span>
        </div>

        <div>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <button type="submit"></button>
      </form>
    </div>
  );
}
