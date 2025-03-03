async function subCourse(uid, courseID) {
  const url = `http://localhost:4000/subscribe/${courseID}/${uid}`;
  const res = await fetch(url, {
    method: "POST",
  });
  if (!res.ok) {
    console.log("FAILED");
  }
}

async function listCourses() {
  const url = "http://localhost:4000/course/all";
  const res = await fetch(url, {
    method: "GET",
  });

  const data = await res.json();

  return data.map((d) => {
    const navigate = useN;
    return (
      <>
        <button onClick={subCourse(uid, d.id)}>{d.name}</button>
      </>
    );
  });
}

export default function AddCourses() {
  return <></>;
}
