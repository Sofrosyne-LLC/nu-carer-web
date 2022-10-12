import { createContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  /*
    ********
    *********
    ***********
    MISC
  */

  // Topbar Title
  const [topbarTitle, setTopbarTitle] = useState("Dashboard");

  /************
   *********
   ********
   */

  /*
    ********
    *********
    ***********
    ADMIN
  */

  // ***ADMIN CAREGIVER*** //
  const [caregiverHandler, setCaregiverHandler] = useState({
    caregiver: {},
    action: "list",
  });

  // ***ADMIN RESIDENT***//
  const [residentHandler, setResidentHandler] = useState({
    resident: {},
    action: "list",
  });

  /************
   *********
   ********
   */

  /*
    ********
    *********
    ***********
    FUNCTIONS
  */

  /* ***********
   *********
   ********
   */

  return (
    <AppContext.Provider
      value={{
        /*
          ********
          *********
          ***********
          MISC
        */
        topbarTitle,

        setTopbarTitle,

        /* ***********
         *********
         ********
         */
        /*
          ********
          *********
          ***********
          ADMIN
        */
        // Admin Caregiver
        caregiverHandler,

        setCaregiverHandler,

        // Admin Resident
        residentHandler,

        setResidentHandler,

        /* ***********
         *********
         ********
         */
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
