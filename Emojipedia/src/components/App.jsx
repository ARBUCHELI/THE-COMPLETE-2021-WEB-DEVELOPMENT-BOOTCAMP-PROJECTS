import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function createEntry(emo) {
  return (
    <Entry
      key={emo.id}
      id={emo.id}
      name={emo.name}
      img={emo.emoji}
      description={emo.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
        {emojipedia.map(createEntry)}
      </dl>
    </div>
  );
}

export default App;
