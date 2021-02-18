// Importing in this way gives webpack the opportunity to asyncronously load modules
// in the rest of our source code. This fixes the "Shared module is not available for eager
// consumption" error we get when attempting to load this in isolation with our shared
// dependencies as configured in our ModuleFederationPlugin.
import("./bootstrap");
