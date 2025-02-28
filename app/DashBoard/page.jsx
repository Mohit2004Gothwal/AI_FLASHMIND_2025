import { UserButton } from "@clerk/nextjs";
import CreateForm from "../_components/CreateForm";
import Flashcardform from "../_components/Flashcardform";




function DashBoard() {
  return (
    <div className="p-10 bg-gray-100"> {/* Added background class */}

      <h2 className="font-bold text-3xl">DashBoard</h2>
      <div className="flex flex-col items-end space-y-4 mt-6"> 

        <CreateForm/>
        <Flashcardform/>
      </div>
      <p></p>
      <p>Flashcard history is now accessible from the sidenav.</p>

    </div>
  );
}

export default DashBoard;
