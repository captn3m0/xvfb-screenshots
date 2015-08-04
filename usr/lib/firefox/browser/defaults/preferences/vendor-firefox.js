// Disable default browser checking.
pref("browser.shell.checkDefaultBrowser", false);

// Don't disable extensions dropped in to a system
// location, or those owned by the application
pref("extensions.autoDisableScopes", 3);

// Don't display the one-off addon selection dialog when
// upgrading from a version of Firefox older than 8.0
pref("extensions.shownSelectionUI", true);

// We add the two new config options:
pref("browser.sessionstore.resume_from_crash", false);
pref("browser.startup.page", 0);