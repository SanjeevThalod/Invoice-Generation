export default function Header() {
    return (
      <>
        <header className="flex flex-col items-center justify-center mb-5 xl:flex-row xl:justify-between">
          <div>
            <h1 className="font-bold uppercase tracking-wide text-4xl mb-3">
              Logo
            </h1>
          </div>
          <div className="font-bold text-1xl">Tax Invoice/Cash Memo/Bill of supply</div>
        </header>
      </>
    );
  }
  