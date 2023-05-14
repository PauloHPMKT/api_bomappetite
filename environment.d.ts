declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: string;
			DB_STRING_DEV_URI: string;
    }
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {}
