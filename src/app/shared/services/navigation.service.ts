import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

interface IMenuItem {
  type: string; // Possible values: link/link/separator/extLink
  name?: string; // Used as display text for item and title for separator type
  state?: string; // Router state
  icon?: string; // Material icon name
  tooltip?: string; // Tooltip text
  disabled?: boolean; // If true, item will not be appeared in sidenav.
  sub?: IChildItem[]; // Dropdown items
  badges?: IBadge[];
  role?: string[];
}
interface IChildItem {
  type?: string;
  name: string; // Display text
  state?: string; // Router state
  icon?: string;
  sub?: IChildItem[];
}

interface IBadge {
  color: string; // primary/accent/warn/hex color codes(#fff000)
  value: string; // Display text
}
// DepartmentHead;
// Administrator;
// FinanceManager;
// Purchaser;
// StoreMan;
// ProcurementManager;

@Injectable()
export class NavigationService {
  constructor() {}
  iconMenu: IMenuItem[] = [
    {
      name: "Home",
      type: "link",
      tooltip: "Dashboard",
      icon: "dashboard",
      state: "dashboard/analytics",
    },
    {
      name: "Register",
      type: "link",
      tooltip: "Forms",
      icon: "description",
      state: "view/purchases/create",
      role: ["Administrator"],
    },
    {
      name: "Users",
      type: "link",
      tooltip: "Forms",
      icon: "description",
      state: "view/purchases",
      role: ["Administrator"],
    },
    {
      name: "Request",
      type: "link",
      tooltip: "Forms",
      icon: "description",
      state: "request/create",
      role: ["DepartmentHead"],
    },
    {
      name: "Requests",
      type: "link",
      tooltip: "Forms",
      icon: "description",
      state: "requests",
      role: [
        "DepartmentHead",
        "FinanceManager",
        "Purchaser",
        "ProcurementManager",
      ],
    },
    {
      name: "Store",
      type: "link",
      tooltip: "Forms",
      icon: "description",
      state: "store/create",
      role: ["Purchaser", "StoreMan"],
    },
    {
      name: "Stores",
      type: "link",
      tooltip: "Forms",
      icon: "description",
      state: "stores",
      role: ["DepartmentHead", "Purchaser", "StoreMan", "ProcurementManager"],
    },
    {
      name: "Employee",
      type: "link",
      tooltip: "Forms",
      icon: "description",
      state: "employee",
      role: ["Administrator"],
    },
    {
      name: "Employees",
      type: "link",
      tooltip: "Forms",
      icon: "description",
      state: "employees",
      role: ["Administrator"],
    },
    {
      name: "Company",
      type: "link",
      tooltip: "Forms",
      icon: "description",
      state: "view/purchases",
      role: ["Administrator"],
    },
    {
      name: "Companies",
      type: "link",
      tooltip: "Forms",
      icon: "description",
      state: "view/purchases",
      role: ["Administrator"],
    },
    {
      name: "Audit",
      type: "link",
      tooltip: "Forms",
      icon: "description",
      state: "view/purchases",
      role: ["Administrator"],
    },
  ];

  // Icon menu TITLE at the very top of navigation.
  // This title will appear if any icon type item is present in menu.
  iconTypeMenuTitle: string = "Frequently Accessed";
  // sets iconMenu as default;
  menuItems = new BehaviorSubject<IMenuItem[]>(this.iconMenu);
  // navigation component has subscribed to this Observable
  menuItems$ = this.menuItems.asObservable();

  // Customizer component uses this method to change menu.
  // You can remove this method and customizer component.
  // Or you can customize this method to supply different menu for
  // different user type.
  publishNavigationChange(menuType: string) {
    this.menuItems.next(this.iconMenu);
  }
}
