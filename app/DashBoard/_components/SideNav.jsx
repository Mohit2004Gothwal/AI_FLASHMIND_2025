"use client";

import Link from "next/link";
import { Button } from "../../../components/ui/button";
import { FileText, LayoutDashboard, Settings } from "lucide-react";

function SideNav() {
  return (
    <div className="w-64 border-r h-screen p-4">
      <nav className="space-y-1">
        <Link href="/dashboard">
          <Button variant="ghost" className="w-full justify-start">
            <LayoutDashboard className="mr-2 h-4 w-4" />
            Dashboard
          </Button>
        </Link>
        <Link href="/dashboard/forms">
          <Button variant="ghost" className="w-full justify-start">
            <FileText className="mr-2 h-4 w-4" />
            Forms
          </Button>
        </Link>
        <Link href="/dashboard/flashcard-history">
          <Button variant="ghost" className="w-full justify-start text-red-500 hover:text-red-700">
            <FileText className="mr-2 h-4 w-4" />
            Flashcard History
          </Button>
        </Link>
        <Link href="/dashboard/settings">
        </Link>
        <Link href="/dashboard/settings">


          <Button variant="ghost" className="w-full justify-start">
            <Settings className="mr-2 h-4 w-4" />
            Settings
          </Button>
        </Link>
      </nav>
    </div>
  );
}

export default SideNav;
