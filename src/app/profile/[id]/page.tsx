export default function UserProfile({ params }: any) {
  return (
    <div className="d-flex flex-column min-vh-100 align-items-center justify-content-center">
      <h1>User Profile</h1>
      <hr />

      <p>
        User id:{" "}
        <span className={"p-2 ml-2 rounded bg-amber-500 text-black"}>
          {params.id}
        </span>
      </p>
    </div>
  );
}
