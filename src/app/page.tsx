import Image from "next/image";
import Link from "next/link"

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col row-start-2">
        <div className="bg-black-noise text-white-noise">
           <div className="py-[3.3em] flex container m-auto">
              <div>
                  <h1 className="uppercase font-semibold tracking-wide">Militaris</h1>
              </div>
              <div>
                  <ul>
                    <li><a href=""></a></li>
                    <li><a href=""></a></li>
                    <li><a href=""></a></li>
                  </ul>
              </div>
              <div className="ml-auto">
                  <ul className="flex flex-row">
                    <li className="pl-5"><a href="">Geopolitic</a></li>
                    <li className="pl-5"><a href="">Army</a></li>
                    <li className="pl-5"><a href="">Air force</a></li>
                    <li className="pl-5"><a href="">Navy</a></li>
                  </ul>
              </div>
           </div>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">

      </footer>
    </div>
  );
}
