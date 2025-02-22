import { UserButton } from "@clerk/nextjs";
import CreateForm from "@/app/_components/CreateForm";
import Flashcardform from "@/app/_components/Flashcardform";

function DashBoard() {
  return (
    <div className="p-10">
      <h2 className="font-bold text-3xl">DashBoard</h2>
      <div className="flex flex-col items-end space-y-4 mt-6">
        <CreateForm/>
        <Flashcardform/>
      </div>
      <p></p>
    </div>

  );
}

export default DashBoard;
