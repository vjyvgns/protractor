// Type definitions for Selenium WebDriverJS 2.53.1
// Project: https://github.com/SeleniumHQ/selenium/tree/master/javascript/node/selenium-webdriver
// Definitions by: Bill Armstrong <https://github.com/BillArmstrong>, Yuki Kokubun <https://github.com/Kuniwak>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace chrome {
    /**
     * Creates a new WebDriver client for Chrome.
     *
     * @extends {webdriver.WebDriver}
     */
    class Driver extends webdriver.WebDriver {
        /**
         * @param {(webdriver.Capabilities|Options)=} opt_config The configuration
         *     options.
         * @param {remote.DriverService=} opt_service The session to use; will use
         *     the {@link getDefaultService default service} by default.
         * @param {webdriver.promise.ControlFlow=} opt_flow The control flow to use, or
         *     {@code null} to use the currently active flow.
         * @constructor
         */
        constructor(opt_config?: Options|webdriver.Capabilities, opt_service?: remote.DriverService, opt_flow?: webdriver.promise.ControlFlow);
    }

    interface IOptionsValues {
        args: string[];
        binary?: string;
        detach: boolean;
        extensions: string[];
        localState?: any;
        logFile?: string;
        prefs?: any;
    }

    interface IPerfLoggingPrefs {
      enableNetwork: boolean;
      enablePage: boolean;
      enableTimeline: boolean;
      tracingCategories: string;
      bufferUsageReportingInterval: number;
    }

    /**
     * Class for managing ChromeDriver specific options.
     */
    class Options {
        /**
         * @constructor
         */
        constructor();

        /**
         * Extracts the ChromeDriver specific options from the given capabilities
         * object.
         * @param {!webdriver.Capabilities} capabilities The capabilities object.
         * @return {!Options} The ChromeDriver options.
         */
        static fromCapabilities(capabilities: webdriver.Capabilities): Options;


        /**
         * Add additional command line arguments to use when launching the Chrome
         * browser.  Each argument may be specified with or without the "--" prefix
         * (e.g. "--foo" and "foo"). Arguments with an associated value should be
         * delimited by an "=": "foo=bar".
         * @param {...(string|!Array.<string>)} var_args The arguments to add.
         * @return {!Options} A self reference.
         */
        addArguments(...var_args: string[]): Options;


        /**
         * List of Chrome command line switches to exclude that ChromeDriver by default
         * passes when starting Chrome.  Do not prefix switches with "--".
         *
         * @param {...(string|!Array<string>)} var_args The switches to exclude.
         * @return {!Options} A self reference.
         */
        excludeSwitches(...var_args: string[]): Options;


        /**
         * Add additional extensions to install when launching Chrome. Each extension
         * should be specified as the path to the packed CRX file, or a Buffer for an
         * extension.
         * @param {...(string|!Buffer|!Array.<(string|!Buffer)>)} var_args The
         *     extensions to add.
         * @return {!Options} A self reference.
         */
        addExtensions(...var_args: any[]): Options;


        /**
         * Sets the path to the Chrome binary to use. On Mac OS X, this path should
         * reference the actual Chrome executable, not just the application binary
         * (e.g. "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome").
         *
         * The binary path be absolute or relative to the chromedriver server
         * executable, but it must exist on the machine that will launch Chrome.
         *
         * @param {string} path The path to the Chrome binary to use.
         * @return {!Options} A self reference.
         */
        setChromeBinaryPath(path: string): Options;


        /**
         * Sets whether to leave the started Chrome browser running if the controlling
         * ChromeDriver service is killed before {@link webdriver.WebDriver#quit()} is
         * called.
         * @param {boolean} detach Whether to leave the browser running if the
         *     chromedriver service is killed before the session.
         * @return {!Options} A self reference.
         */
        detachDriver(detach: boolean): Options;


        /**
         * Sets the user preferences for Chrome's user profile. See the "Preferences"
         * file in Chrome's user data directory for examples.
         * @param {!Object} prefs Dictionary of user preferences to use.
         * @return {!Options} A self reference.
         */
        setUserPreferences(prefs: any): Options;


        /**
         * Sets the logging preferences for the new session.
         * @param {!webdriver.logging.Preferences} prefs The logging preferences.
         * @return {!Options} A self reference.
         */
        setLoggingPrefs(prefs: webdriver.logging.Preferences): Options;

        /**
         * Sets the performance logging preferences. Options include:
         *
         * - `enableNetwork`: Whether or not to collect events from Network domain.
         * - `enablePage`: Whether or not to collect events from Page domain.
         * - `enableTimeline`: Whether or not to collect events from Timeline domain.
         *     Note: when tracing is enabled, Timeline domain is implicitly disabled,
         *     unless `enableTimeline` is explicitly set to true.
         * - `tracingCategories`: A comma-separated string of Chrome tracing categories
         *     for which trace events should be collected. An unspecified or empty
         *     string disables tracing.
         * - `bufferUsageReportingInterval`: The requested number of milliseconds
         *     between DevTools trace buffer usage events. For example, if 1000, then
         *     once per second, DevTools will report how full the trace buffer is. If a
         *     report indicates the buffer usage is 100%, a warning will be issued.
         *
         * @param {{enableNetwork: boolean,
         *          enablePage: boolean,
         *          enableTimeline: boolean,
         *          tracingCategories: string,
         *          bufferUsageReportingInterval: number}} prefs The performance
         *     logging preferences.
         * @return {!Options} A self reference.
         */
        setPerfLoggingPrefs(prefs: IPerfLoggingPrefs): Options;


        /**
         * Sets preferences for the "Local State" file in Chrome's user data
         * directory.
         * @param {!Object} state Dictionary of local state preferences.
         * @return {!Options} A self reference.
         */
        setLocalState(state: any): Options;


        /**
         * Sets the name of the activity hosting a Chrome-based Android WebView. This
         * option must be set to connect to an [Android WebView](
         * https://sites.google.com/a/chromium.org/chromedriver/getting-started/getting-started---android)
         *
         * @param {string} name The activity name.
         * @return {!Options} A self reference.
         */
        androidActivity(name: string): Options;


        /**
         * Sets the device serial number to connect to via ADB. If not specified, the
         * ChromeDriver will select an unused device at random. An error will be
         * returned if all devices already have active sessions.
         *
         * @param {string} serial The device serial number to connect to.
         * @return {!Options} A self reference.
         */
        androidDeviceSerial(serial: string): Options;


        /**
         * Configures the ChromeDriver to launch Chrome on Android via adb. This
         * function is shorthand for
         * {@link #androidPackage options.androidPackage('com.android.chrome')}.
         * @return {!Options} A self reference.
         */
        androidChrome(): Options;


        /**
         * Sets the package name of the Chrome or WebView app.
         *
         * @param {?string} pkg The package to connect to, or `null` to disable Android
         *     and switch back to using desktop Chrome.
         * @return {!Options} A self reference.
         */
        androidPackage(pkg: string): Options;


        /**
         * Sets the process name of the Activity hosting the WebView (as given by `ps`).
         * If not specified, the process name is assumed to be the same as
         * {@link #androidPackage}.
         *
         * @param {string} processName The main activity name.
         * @return {!Options} A self reference.
         */
        androidProcess(processName: string): Options;


        /**
         * Sets whether to connect to an already-running instead of the specified
         * {@linkplain #androidProcess app} instead of launching the app with a clean
         * data directory.
         *
         * @param {boolean} useRunning Whether to connect to a running instance.
         * @return {!Options} A self reference.
         */
        androidUseRunningApp(useRunning: boolean): Options;


        /**
         * Sets the path to Chrome's log file. This path should exist on the machine
         * that will launch Chrome.
         * @param {string} path Path to the log file to use.
         * @return {!Options} A self reference.
         */
        setChromeLogFile(path: string): Options;


        /**
           * Sets the directory to store Chrome minidumps in. This option is only
           * supported when ChromeDriver is running on Linux.
           * @param {string} path The directory path.
           * @return {!Options} A self reference.
           */
        setChromeMinidumpPath(path: string): Options;


        /**
         * Configures Chrome to emulate a mobile device. For more information, refer
         * to the ChromeDriver project page on [mobile emulation][em]. Configuration
         * options include:
         *
         * - `deviceName`: The name of a pre-configured [emulated device][devem]
         * - `width`: screen width, in pixels
         * - `height`: screen height, in pixels
         * - `pixelRatio`: screen pixel ratio
         *
         * __Example 1: Using a Pre-configured Device__
         *
         *     let options = new chrome.Options().setMobileEmulation(
         *         {deviceName: 'Google Nexus 5'});
         *
         *     let driver = new chrome.Driver(options);
         *
         * __Example 2: Using Custom Screen Configuration__
         *
         *     let options = new chrome.Options().setMobileEmulation({
         *         width: 360,
         *         height: 640,
         *         pixelRatio: 3.0
         *     });
         *
         *     let driver = new chrome.Driver(options);
         *
         *
         * [em]: https://sites.google.com/a/chromium.org/chromedriver/mobile-emulation
         * [devem]: https://developer.chrome.com/devtools/docs/device-mode
         *
         * @param {?({deviceName: string}|
         *           {width: number, height: number, pixelRatio: number})} config The
         *     mobile emulation configuration, or `null` to disable emulation.
         * @return {!Options} A self reference.
         */
        setMobileEmulation(config: any): Options;

        /**
         * Sets the proxy settings for the new session.
         * @param {webdriver.ProxyConfig} proxy The proxy configuration to use.
         * @return {!Options} A self reference.
         */
        setProxy(proxy: webdriver.ProxyConfig): Options;


        /**
         * Converts this options instance to a {@link webdriver.Capabilities} object.
         * @param {webdriver.Capabilities=} opt_capabilities The capabilities to merge
         *     these options into, if any.
         * @return {!webdriver.Capabilities} The capabilities.
         */
        toCapabilities(opt_capabilities?: webdriver.Capabilities): webdriver.Capabilities;
    }

    /**
     * Creates {@link remote.DriverService} instances that manage a ChromeDriver
     * server.
     */
    class ServiceBuilder {
        /**
         * @param {string=} opt_exe Path to the server executable to use. If omitted,
         *     the builder will attempt to locate the chromedriver on the current
         *     PATH.
         * @throws {Error} If provided executable does not exist, or the chromedriver
         *     cannot be found on the PATH.
         * @constructor
         */
        constructor(opt_exe?: string);

        /**
         * Sets the port to start the ChromeDriver on.
         * @param {number} port The port to use, or 0 for any free port.
         * @return {!ServiceBuilder} A self reference.
         * @throws {Error} If the port is invalid.
         */
        usingPort(port: number): ServiceBuilder;


        /**
         * Sets which port adb is listening to. _The ChromeDriver will connect to adb
         * if an {@linkplain Options#androidPackage Android session} is requested, but
         * adb **must** be started beforehand._
         *
         * @param {number} port Which port adb is running on.
         * @return {!ServiceBuilder} A self reference.
         */
        setAdbPort(port: number): ServiceBuilder;


        /**
         * Sets the path of the log file the driver should log to. If a log file is
         * not specified, the driver will log to stderr.
         * @param {string} path Path of the log file to use.
         * @return {!ServiceBuilder} A self reference.
         */
        loggingTo(path: string): ServiceBuilder;


        /**
         * Enables verbose logging.
         * @return {!ServiceBuilder} A self reference.
         */
        enableVerboseLogging(): ServiceBuilder;


        /**
         * Sets the number of threads the driver should use to manage HTTP requests.
         * By default, the driver will use 4 threads.
         * @param {number} n The number of threads to use.
         * @return {!ServiceBuilder} A self reference.
         */
        setNumHttpThreads(n: number): ServiceBuilder;


        /**
         * Sets the base path for WebDriver REST commands (e.g. "/wd/hub").
         * By default, the driver will accept commands relative to "/".
         * @param {string} path The base path to use.
         * @return {!ServiceBuilder} A self reference.
         */
        setUrlBasePath(path: string): ServiceBuilder;


        /**
         * Defines the stdio configuration for the driver service. See
         * {@code child_process.spawn} for more information.
         * @param {(string|!Array.<string|number|!Stream|null|undefined>)} config The
         *     configuration to use.
         * @return {!ServiceBuilder} A self reference.
         */
        setStdio(config: string|Array<string|number|any>): ServiceBuilder;


        /**
         * Defines the environment to start the server under. This settings will be
         * inherited by every browser session started by the server.
         * @param {!Object.<string, string>} env The environment to use.
         * @return {!ServiceBuilder} A self reference.
         */
        withEnvironment(env: { [key: string]: string }): ServiceBuilder;


        /**
         * Creates a new DriverService using this instance's current configuration.
         * @return {remote.DriverService} A new driver service using this instance's
         *     current configuration.
         * @throws {Error} If the driver exectuable was not specified and a default
         *     could not be found on the current PATH.
         */
        build(): remote.DriverService;
    }

    /**
     * Returns the default ChromeDriver service. If such a service has not been
     * configured, one will be constructed using the default configuration for
     * a ChromeDriver executable found on the system PATH.
     * @return {!remote.DriverService} The default ChromeDriver service.
     */
    function getDefaultService(): remote.DriverService;

    /**
     * Sets the default service to use for new ChromeDriver instances.
     * @param {!remote.DriverService} service The service to use.
     * @throws {Error} If the default service is currently running.
     */
    function setDefaultService(service: remote.DriverService): void;
}

declare namespace edge {

    class Driver extends webdriver.WebDriver {
      /**
       * @param {(capabilities.Capabilities|Options)=} opt_config The configuration
       *     options.
       * @param {remote.DriverService=} opt_service The session to use; will use
       *     the {@linkplain #getDefaultService default service} by default.
       * @param {promise.ControlFlow=} opt_flow The control flow to use, or
       *     {@code null} to use the currently active flow.
       */
      constructor(opt_config?: webdriver.Capabilities|Options, opt_service?: remote.DriverService, opt_flow?: webdriver.promise.ControlFlow);

      /**
       * This function is a no-op as file detectors are not supported by this
       * implementation.
       * @override
       */
      setFileDetector(): void;
    }

    /**
     * Class for managing MicrosoftEdgeDriver specific options.
     */
    class Options {

      /**
       * Extracts the MicrosoftEdgeDriver specific options from the given
       * capabilities object.
       * @param {!capabilities.Capabilities} caps The capabilities object.
       * @return {!Options} The MicrosoftEdgeDriver options.
       */
      static fromCapabilities(cap: webdriver.Capabilities): Options;

      /**
       * Sets the proxy settings for the new session.
       * @param {capabilities.ProxyConfig} proxy The proxy configuration to use.
       * @return {!Options} A self reference.
       */
      setProxy(proxy: webdriver.ProxyConfig): Options;

      /**
       * Sets the page load strategy for Edge.
       * Supported values are "normal", "eager", and "none";
       *
       * @param {string} pageLoadStrategy The page load strategy to use.
       * @return {!Options} A self reference.
       */
      setPageLoadStrategy(pageLoadStrategy: string): Options;

      /**
       * Converts this options instance to a {@link capabilities.Capabilities}
       * object.
       * @param {capabilities.Capabilities=} opt_capabilities The capabilities to
       *     merge these options into, if any.
       * @return {!capabilities.Capabilities} The capabilities.
       */
      toCapabilities(opt_capabilities: webdriver.Capabilities): webdriver.Capabilities;
    }

    /**
     * Creates {@link remote.DriverService} instances that manage a
     * MicrosoftEdgeDriver server in a child process.
     */
    class ServiceBuilder {
      /**
       * @param {string=} opt_exe Path to the server executable to use. If omitted,
       *   the builder will attempt to locate the MicrosoftEdgeDriver on the current
       *   PATH.
       * @throws {Error} If provided executable does not exist, or the
       *   MicrosoftEdgeDriver cannot be found on the PATH.
       */
      constructor(opt_exe?: string);

      /**
       * Defines the stdio configuration for the driver service. See
       * {@code child_process.spawn} for more information.
       * @param {(string|!Array.<string|number|!stream.Stream|null|undefined>)}
       *     config The configuration to use.
       * @return {!ServiceBuilder} A self reference.
       */
      setStdio(config: string|Array<string|number|any>): ServiceBuilder;

      /**
       * Sets the port to start the MicrosoftEdgeDriver on.
       * @param {number} port The port to use, or 0 for any free port.
       * @return {!ServiceBuilder} A self reference.
       * @throws {Error} If the port is invalid.
       */
      usingPort(port: number): ServiceBuilder;

      /**
       * Defines the environment to start the server under. This settings will be
       * inherited by every browser session started by the server.
       * @param {!Object.<string, string>} env The environment to use.
       * @return {!ServiceBuilder} A self reference.
       */
      withEnvironment(env: Object): ServiceBuilder;

      /**
       * Creates a new DriverService using this instance's current configuration.
       * @return {!remote.DriverService} A new driver service using this instance's
       *     current configuration.
       * @throws {Error} If the driver exectuable was not specified and a default
       *     could not be found on the current PATH.
       */
      build(): remote.DriverService;
    }

    /**
     * Returns the default MicrosoftEdgeDriver service. If such a service has
     * not been configured, one will be constructed using the default configuration
     * for an MicrosoftEdgeDriver executable found on the system PATH.
     * @return {!remote.DriverService} The default MicrosoftEdgeDriver service.
     */
    function getDefaultService(): remote.DriverService;

    /**
     * Sets the default service to use for new MicrosoftEdgeDriver instances.
     * @param {!remote.DriverService} service The service to use.
     * @throws {Error} If the default service is currently running.
     */
    function setDefaultService(service: remote.DriverService): void;
}

declare namespace executors {
    /**
     * Creates a command executor that uses WebDriver's JSON wire protocol.
     * @param {(string|!promise.Promise<string>)} url The server's URL,
     *     or a promise that will resolve to that URL.
     * @param {?string=} opt_proxy (optional) The URL of the HTTP proxy for the
     *     client to use.
     * @returns {!./lib/command.Executor} The new command executor.
     */
    function createExecutor(url: string|webdriver.promise.Promise<string>, opt_agent?: string, opt_proxy?: string): webdriver.Executor;
}

declare namespace firefox {
  /**
   * Manages a Firefox subprocess configured for use with WebDriver.
   */
  class Binary {
      /**
       * @param {string=} opt_exe Path to the Firefox binary to use. If not
       *     specified, will attempt to locate Firefox on the current system.
       * @constructor
       */
      constructor(opt_exe?: string);

      /**
       * Add arguments to the command line used to start Firefox.
       * @param {...(string|!Array.<string>)} var_args Either the arguments to add as
       *     varargs, or the arguments as an array.
       */
      addArguments(...var_args: string[]): void;


      /**
       * Launches Firefox and eturns a promise that will be fulfilled when the process
       * terminates.
       * @param {string} profile Path to the profile directory to use.
       * @return {!promise.Promise.<!exec.Result>} A promise for the process result.
       * @throws {Error} If this instance has already been started.
       */
      launch(profile: string): webdriver.promise.Promise<any>;


      /**
       * Kills the managed Firefox process.
       * @return {!promise.Promise} A promise for when the process has terminated.
       */
      kill(): webdriver.promise.Promise<void>;
  }

  /**
   * Models a Firefox proifle directory for use with the FirefoxDriver. The
   * {@code Proifle} directory uses an in-memory model until {@link #writeToDisk}
   * is called.
   */
  class Profile {
      /**
       * @param {string=} opt_dir Path to an existing Firefox profile directory to
       *     use a template for this profile. If not specified, a blank profile will
       *     be used.
       * @constructor
       */
      constructor(opt_dir?: string);

      /**
       * Registers an extension to be included with this profile.
       * @param {string} extension Path to the extension to include, as either an
       *     unpacked extension directory or the path to a xpi file.
       */
      addExtension(extension: string): void;


      /**
       * Sets a desired preference for this profile.
       * @param {string} key The preference key.
       * @param {(string|number|boolean)} value The preference value.
       * @throws {Error} If attempting to set a frozen preference.
       */
      setPreference(key: string, value: string): void;
      setPreference(key: string, value: number): void;
      setPreference(key: string, value: boolean): void;


      /**
       * Returns the currently configured value of a profile preference. This does
       * not include any defaults defined in the profile's template directory user.js
       * file (if a template were specified on construction).
       * @param {string} key The desired preference.
       * @return {(string|number|boolean|undefined)} The current value of the
       *     requested preference.
       */
      getPreference(key: string): any;


      /**
       * @return {number} The port this profile is currently configured to use, or
       *     0 if the port will be selected at random when the profile is written
       *     to disk.
       */
      getPort(): number;


      /**
       * Sets the port to use for the WebDriver extension loaded by this profile.
       * @param {number} port The desired port, or 0 to use any free port.
       */
      setPort(port: number): void;


      /**
       * @return {boolean} Whether the FirefoxDriver is configured to automatically
       *     accept untrusted SSL certificates.
       */
      acceptUntrustedCerts(): boolean;


      /**
       * Sets whether the FirefoxDriver should automatically accept untrusted SSL
       * certificates.
       * @param {boolean} value .
       */
      setAcceptUntrustedCerts(value: boolean): void;


      /**
       * Sets whether to assume untrusted certificates come from untrusted issuers.
       * @param {boolean} value .
       */
      setAssumeUntrustedCertIssuer(value: boolean): void;


      /**
       * @return {boolean} Whether to assume untrusted certs come from untrusted
       *     issuers.
       */
      assumeUntrustedCertIssuer(): boolean;


      /**
       * Sets whether to use native events with this profile.
       * @param {boolean} enabled .
       */
      setNativeEventsEnabled(enabled: boolean): void;


      /**
       * Returns whether native events are enabled in this profile.
       * @return {boolean} .
       */
      nativeEventsEnabled(): boolean;


      /**
       * Writes this profile to disk.
       * @param {boolean=} opt_excludeWebDriverExt Whether to exclude the WebDriver
       *     extension from the generated profile. Used to reduce the size of an
       *     {@link #encode() encoded profile} since the server will always install
       *     the extension itself.
       * @return {!promise.Promise.<string>} A promise for the path to the new
       *     profile directory.
       */
      writeToDisk(opt_excludeWebDriverExt?: boolean): webdriver.promise.Promise<string>;


      /**
       * Encodes this profile as a zipped, base64 encoded directory.
       * @return {!promise.Promise.<string>} A promise for the encoded profile.
       */
      encode(): webdriver.promise.Promise<string>;
  }

  /**
   * Configuration options for the FirefoxDriver.
   */
  class Options {
    /**
     * Sets the profile to use. The profile may be specified as a
     * {@link Profile} object or as the path to an existing Firefox profile to use
     * as a template.
     *
     * @param {(string|!Profile)} profile The profile to use.
     * @return {!Options} A self reference.
     */
    setProfile(profile: string|any): Options;

    /**
     * Sets the binary to use. The binary may be specified as the path to a Firefox
     * executable, or as a {@link Binary} object.
     *
     * @param {(string|!Binary)} binary The binary to use.
     * @return {!Options} A self reference.
     */
    setBinary(binary: string|any): Options;

    /**
     * Sets the logging preferences for the new session.
     * @param {logging.Preferences} prefs The logging preferences.
     * @return {!Options} A self reference.
     */
    setLoggingPreferences(prefs: webdriver.logging.Preferences): Options;

    /**
     * Sets the proxy to use.
     *
     * @param {capabilities.ProxyConfig} proxy The proxy configuration to use.
     * @return {!Options} A self reference.
     */
    setProxy(proxy: webdriver.ProxyConfig): Options;

    /**
     * Sets whether to use Mozilla's Marionette to drive the browser.
     *
     * @see https://developer.mozilla.org/en-US/docs/Mozilla/QA/Marionette/WebDriver
     */
    useMarionette(marionette: any): Options;

    /**
     * Converts these options to a {@link capabilities.Capabilities} instance.
     *
     * @return {!capabilities.Capabilities} A new capabilities object.
     */
    toCapabilities(): webdriver.Capabilities;
  }

  /**
   * @return {string} .
   * @throws {Error}
   */
  function findWires(): string;

  /**
   * @param {(string|!Binary)} binary .
   * @return {!remote.DriverService} .
   */
  function createWiresService(binary: string|any): remote.DriverService;

  /**
   * @param {(Profile|string)} profile The profile to prepare.
   * @param {number} port The port the FirefoxDriver should listen on.
   * @return {!Promise<string>} a promise for the path to the profile directory.
   */
  function prepareProfile(profile: string|any, port: number): any;

  /**
   * A WebDriver client for Firefox.
   */
  class Driver extends webdriver.WebDriver {
    /**
     * @param {(Options|capabilities.Capabilities|Object)=} opt_config The
     *    configuration options for this driver, specified as either an
     *    {@link Options} or {@link capabilities.Capabilities}, or as a raw hash
     *    object.
     * @param {promise.ControlFlow=} opt_flow The flow to
     *     schedule commands through. Defaults to the active flow object.
     */
    constructor(opt_config?: Options|webdriver.Capabilities|Object, opt_flow?: webdriver.promise.ControlFlow);

    /**
     * This function is a no-op as file detectors are not supported by this
     * implementation.
     * @override
     */
    setFileDetector(): void;
  }
}

declare namespace http {
  /**
   * Converts a headers map to a HTTP header block string.
   * @param {!Map<string, string>} headers The map to convert.
   * @return {string} The headers as a string.
   */
  function headersToString(headers: any): string;

  /**
   * Represents a HTTP request message. This class is a "partial" request and only
   * defines the path on the server to send a request to. It is each client's
   * responsibility to build the full URL for the final request.
   * @final
   */
  class HttpRequest {
    /**
     * @param {string} method The HTTP method to use for the request.
     * @param {string} path The path on the server to send the request to.
     * @param {Object=} opt_data This request's non-serialized JSON payload data.
     */
    constructor(method: string, path: string, opt_data?: Object);

    /** @override */
    toString(): string;
  }

  /**
   * Represents a HTTP response message.
   * @final
   */
  class HttpResponse {
    /**
     * @param {number} status The response code.
     * @param {!Object<string>} headers The response headers. All header names
     *     will be converted to lowercase strings for consistent lookups.
     * @param {string} body The response body.
     */
    constructor(status: number, headers: Object, body: string);

    /** @override */
    toString(): string;
  }


  function post(path: string): any;
  function del(path: string): any;
  function get(path: string): any;
  function resource(method: string, path: string): any;

  /**
   * A basic HTTP client used to send messages to a remote end.
   */
  class HttpClient {
    /**
     * @param {string} serverUrl URL for the WebDriver server to send commands to.
     * @param {http.Agent=} opt_agent The agent to use for each request.
     *     Defaults to `http.globalAgent`.
     * @param {?string=} opt_proxy The proxy to use for the connection to the
     *     server. Default is to use no proxy.
     */
    constructor(serverUrl: string, opt_agent?: any, opt_proxy?: string);

    /**
     * Sends a request to the server. The client will automatically follow any
     * redirects returned by the server, fulfilling the returned promise with the
     * final response.
     *
     * @param {!HttpRequest} httpRequest The request to send.
     * @return {!promise.Promise<HttpResponse>} A promise that will be fulfilled
     *     with the server's response.
     */
    send(httpRequest: HttpRequest): webdriver.promise.Promise<HttpResponse>;
  }

  /**
   * Sends a single HTTP request.
   * @param {!Object} options The request options.
   * @param {function(!HttpResponse)} onOk The function to call if the
   *     request succeeds.
   * @param {function(!Error)} onError The function to call if the request fails.
   * @param {?string=} opt_data The data to send with the request.
   * @param {?string=} opt_proxy The proxy server to use for the request.
   */
  function sendRequest(options: Object, onOk: any, onError: any, opt_data?: string, opt_proxy?: string): any;

  /**
   * A command executor that communicates with the server using HTTP + JSON.
   *
   * By default, each instance of this class will use the legacy wire protocol
   * from [Selenium project][json]. The executor will automatically switch to the
   * [W3C wire protocol][w3c] if the remote end returns a compliant response to
   * a new session command.
   *
   * [json]: https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol
   * [w3c]: https://w3c.github.io/webdriver/webdriver-spec.html
   *
   * @implements {cmd.Executor}
   */
  class Executor {
    /**
     * @param {!HttpClient} client The client to use for sending requests to the
     *     server.
     */
    constructor(client: HttpClient);

    /**
     * Defines a new command for use with this executor. When a command is sent,
     * the {@code path} will be preprocessed using the command's parameters; any
     * path segments prefixed with ":" will be replaced by the parameter of the
     * same name. For example, given "/person/:name" and the parameters
     * "{name: 'Bob'}", the final command path will be "/person/Bob".
     *
     * @param {string} name The command name.
     * @param {string} method The HTTP method to use when sending this command.
     * @param {string} path The path to send the command to, relative to
     *     the WebDriver server's command root and of the form
     *     "/path/:variable/segment".
     */
    defineCommand(name: string, method: string, path: string): void;

    /** @override */
    execute(command: any): any;
  }

  /**
   * @param {string} str .
   * @return {?} .
   */
  function tryParse(str: string): any;

  /**
   * Callback used to parse {@link HttpResponse} objects from a
   * {@link HttpClient}.
   * @param {!HttpResponse} httpResponse The HTTP response to parse.
   * @param {boolean} w3c Whether the response should be processed using the
   *     W3C wire protocol.
   * @return {{value: ?}} The parsed response.
   * @throws {WebDriverError} If the HTTP response is an error.
   */
  function parseHttpResponse(httpResponse: HttpResponse, w3c: boolean): any;

  /**
   * Builds a fully qualified path using the given set of command parameters. Each
   * path segment prefixed with ':' will be replaced by the value of the
   * corresponding parameter. All parameters spliced into the path will be
   * removed from the parameter map.
   * @param {string} path The original resource path.
   * @param {!Object<*>} parameters The parameters object to splice into the path.
   * @return {string} The modified path.
   */
  function buildPath(path: string, parameters: Object): string;
}

declare namespace ie {

  /**
   * A WebDriver client for Microsoft's Internet Explorer.
   */
  class Driver extends webdriver.WebDriver {
    /**
     * @param {(capabilities.Capabilities|Options)=} opt_config The configuration
     *     options.
     * @param {promise.ControlFlow=} opt_flow The control flow to use,
     *     or {@code null} to use the currently active flow.
     */
    constructor(opt_config?: webdriver.Capabilities|Options, opt_flow?: webdriver.promise.ControlFlow);

    /**
     * This function is a no-op as file detectors are not supported by this
     * implementation.
     * @override
     */
    setFileDetector(): void;
  }

  /**
   * Class for managing IEDriver specific options.
   */
  class Options {
    constructor();

    /**
     * Extracts the IEDriver specific options from the given capabilities
     * object.
     * @param {!capabilities.Capabilities} caps The capabilities object.
     * @return {!Options} The IEDriver options.
     */
    static fromCapabilities(caps: webdriver.Capabilities): Options;

    /**
     * Whether to disable the protected mode settings check when the session is
     * created. Disbling this setting may lead to significant instability as the
     * browser may become unresponsive/hang. Only "best effort" support is provided
     * when using this capability.
     *
     * For more information, refer to the IEDriver's
     * [required system configuration](http://goo.gl/eH0Yi3).
     *
     * @param {boolean} ignoreSettings Whether to ignore protected mode settings.
     * @return {!Options} A self reference.
     */
    introduceFlakinessByIgnoringProtectedModeSettings(ignoreSettings: boolean): Options;

    /**
     * Indicates whether to skip the check that the browser's zoom level is set to
     * 100%.
     *
     * @param {boolean} ignore Whether to ignore the browser's zoom level settings.
     * @return {!Options} A self reference.
     */
    ignoreZoomSetting(ignore: boolean): Options;

    /**
     * Sets the initial URL loaded when IE starts. This is intended to be used with
     * {@link #ignoreProtectedModeSettings} to allow the user to initialize IE in
     * the proper Protected Mode zone. Setting this option may cause browser
     * instability or flaky and unresponsive code. Only "best effort" support is
     * provided when using this option.
     *
     * @param {string} url The initial browser URL.
     * @return {!Options} A self reference.
     */
    initialBrowserUrl(url: string): Options;

    /**
     * Configures whether to enable persistent mouse hovering (true by default).
     * Persistent hovering is achieved by continuously firing mouse over events at
     * the last location the mouse cursor has been moved to.
     *
     * @param {boolean} enable Whether to enable persistent hovering.
     * @return {!Options} A self reference.
     */
    enablePersistentHover(enable: boolean): Options;

    /**
     * Configures whether the driver should attempt to remove obsolete
     * {@linkplain webdriver.WebElement WebElements} from its internal cache on
     * page navigation (true by default). Disabling this option will cause the
     * driver to run with a larger memory footprint.
     *
     * @param {boolean} enable Whether to enable element reference cleanup.
     * @return {!Options} A self reference.
     */
    enableElementCacheCleanup(enable: boolean): Options;

    /**
     * Configures whether to require the IE window to have input focus before
     * performing any user interactions (i.e. mouse or keyboard events). This
     * option is disabled by default, but delivers much more accurate interaction
     * events when enabled.
     *
     * @param {boolean} require Whether to require window focus.
     * @return {!Options} A self reference.
     */
    requireWindowFocus(require: boolean): Options;

    /**
     * Configures the timeout, in milliseconds, that the driver will attempt to
     * located and attach to a newly opened instance of Internet Explorer. The
     * default is zero, which indicates waiting indefinitely.
     *
     * @param {number} timeout How long to wait for IE.
     * @return {!Options} A self reference.
     */
    browserAttachTimeout(timeout: number): Options;

    /**
     * Configures whether to launch Internet Explorer using the CreateProcess API.
     * If this option is not specified, IE is launched using IELaunchURL, if
     * available. For IE 8 and above, this option requires the TabProcGrowth
     * registry value to be set to 0.
     *
     * @param {boolean} force Whether to use the CreateProcess API.
     * @return {!Options} A self reference.
     */
    forceCreateProcessApi(force: boolean): Options;

    /**
     * Specifies command-line switches to use when launching Internet Explorer.
     * This is only valid when used with {@link #forceCreateProcessApi}.
     *
     * @param {...(string|!Array.<string>)} var_args The arguments to add.
     * @return {!Options} A self reference.
     */
    addArguments(...var_args: Array<string>): Options;

    /**
     * Configures whether proxies should be configured on a per-process basis. If
     * not set, setting a {@linkplain #setProxy proxy} will configure the system
     * proxy. The default behavior is to use the system proxy.
     *
     * @param {boolean} enable Whether to enable per-process proxy settings.
     * @return {!Options} A self reference.
     */
    usePerProcessProxy(enable: boolean): Options;

    /**
     * Configures whether to clear the cache, cookies, history, and saved form data
     * before starting the browser. _Using this capability will clear session data
     * for all running instances of Internet Explorer, including those started
     * manually._
     *
     * @param {boolean} cleanSession Whether to clear all session data on startup.
     * @return {!Options} A self reference.
     */
    ensureCleanSession(cleanSession: boolean): Options;

    /**
     * Sets the path to the log file the driver should log to.
     * @param {string} file The log file path.
     * @return {!Options} A self reference.
     */
    setLogFile(file: string): Options;

    /**
     * Sets the IEDriverServer's logging {@linkplain Level level}.
     * @param {Level} level The logging level.
     * @return {!Options} A self reference.
     */
    setLogLevel(level: webdriver.logging.Level): Options;

    /**
     * Sets the IP address of the driver's host adapter.
     * @param {string} host The IP address to use.
     * @return {!Options} A self reference.
     */
    setHost(host: string): Options;

    /**
     * Sets the path of the temporary data directory to use.
     * @param {string} path The log file path.
     * @return {!Options} A self reference.
     */
    setExtractPath(path: string): Options;

    /**
     * Sets whether the driver should start in silent mode.
     * @param {boolean} silent Whether to run in silent mode.
     * @return {!Options} A self reference.
     */
    silent(silent: boolean): Options;

    /**
     * Sets the proxy settings for the new session.
     * @param {capabilities.ProxyConfig} proxy The proxy configuration to use.
     * @return {!Options} A self reference.
     */
    setProxy(proxy: webdriver.ProxyConfig): Options;

    /**
     * Converts this options instance to a {@link capabilities.Capabilities}
     * object.
     * @param {capabilities.Capabilities=} opt_capabilities The capabilities to
     *     merge these options into, if any.
     * @return {!capabilities.Capabilities} The capabilities.
     */
    toCapabilities(opt_capabilities: webdriver.Capabilities): webdriver.Capabilities;
  }

}

declare namespace opera {
  /**
   * Creates {@link remote.DriverService} instances that manages an
   * [OperaDriver](https://github.com/operasoftware/operachromiumdriver)
   * server in a child process.
   */
  class ServiceBuilder {
    /**
     * @param {string=} opt_exe Path to the server executable to use. If omitted,
     *     the builder will attempt to locate the operadriver on the current
     *     PATH.
     * @throws {Error} If provided executable does not exist, or the operadriver
     *     cannot be found on the PATH.
     */
    constructor(opt_exe?: string);

    /**
     * Sets the port to start the OperaDriver on.
     * @param {number} port The port to use, or 0 for any free port.
     * @return {!ServiceBuilder} A self reference.
     * @throws {Error} If the port is invalid.
     */
    usingPort(port: number): ServiceBuilder;

    /**
     * Sets the path of the log file the driver should log to. If a log file is
     * not specified, the driver will log to stderr.
     * @param {string} path Path of the log file to use.
     * @return {!ServiceBuilder} A self reference.
     */
    loggingTo(path: string): ServiceBuilder;

    /**
     * Enables verbose logging.
     * @return {!ServiceBuilder} A self reference.
     */
    enableVerboseLogging(): ServiceBuilder;

    /**
     * Silence sthe drivers output.
     * @return {!ServiceBuilder} A self reference.
     */
    silent(): ServiceBuilder;

    /**
     * Defines the stdio configuration for the driver service. See
     * {@code child_process.spawn} for more information.
     * @param {(string|!Array<string|number|!stream.Stream|null|undefined>)}
     *     config The configuration to use.
     * @return {!ServiceBuilder} A self reference.
     */
    setStdio(config: string|Array<string|number|any>): ServiceBuilder;

    /**
     * Defines the environment to start the server under. This settings will be
     * inherited by every browser session started by the server.
     * @param {!Object.<string, string>} env The environment to use.
     * @return {!ServiceBuilder} A self reference.
     */
    withEnvironment(env: Object): ServiceBuilder;

    /**
     * Creates a new DriverService using this instance's current configuration.
     * @return {!remote.DriverService} A new driver service using this instance's
     *     current configuration.
     * @throws {Error} If the driver exectuable was not specified and a default
     *     could not be found on the current PATH.
     */
    build(): remote.DriverService;
  }

  /**
   * Sets the default service to use for new OperaDriver instances.
   * @param {!remote.DriverService} service The service to use.
   * @throws {Error} If the default service is currently running.
   */
  function setDefaultService(service: remote.DriverService): any;

  /**
   * Returns the default OperaDriver service. If such a service has not been
   * configured, one will be constructed using the default configuration for
   * a OperaDriver executable found on the system PATH.
   * @return {!remote.DriverService} The default OperaDriver service.
   */
  function getDefaultService(): remote.DriverService;

  /**
   * Class for managing {@linkplain Driver OperaDriver} specific options.
   */
  class Options {
    /**
     * Extracts the OperaDriver specific options from the given capabilities
     * object.
     * @param {!capabilities.Capabilities} caps The capabilities object.
     * @return {!Options} The OperaDriver options.
     */
    static fromCapabilities(caps: webdriver.Capabilities): Options;

    /**
     * Add additional command line arguments to use when launching the Opera
     * browser.  Each argument may be specified with or without the "--" prefix
     * (e.g. "--foo" and "foo"). Arguments with an associated value should be
     * delimited by an "=": "foo=bar".
     * @param {...(string|!Array.<string>)} var_args The arguments to add.
     * @return {!Options} A self reference.
     */
    addArguments(...var_args: Array<string>): Options;

    /**
     * Add additional extensions to install when launching Opera. Each extension
     * should be specified as the path to the packed CRX file, or a Buffer for an
     * extension.
     * @param {...(string|!Buffer|!Array.<(string|!Buffer)>)} var_args The
     *     extensions to add.
     * @return {!Options} A self reference.
     */
    addExtensions(...var_args: Array<any>): Options;

    /**
     * Sets the path to the Opera binary to use. On Mac OS X, this path should
     * reference the actual Opera executable, not just the application binary. The
     * binary path be absolute or relative to the operadriver server executable, but
     * it must exist on the machine that will launch Opera.
     *
     * @param {string} path The path to the Opera binary to use.
     * @return {!Options} A self reference.
     */
    setOperaBinaryPath(path: string): Options;

    /**
     * Sets the logging preferences for the new session.
     * @param {!./lib/logging.Preferences} prefs The logging preferences.
     * @return {!Options} A self reference.
     */
    setLoggingPrefs(prefs: webdriver.logging.Preferences): Options;

    /**
     * Sets the proxy settings for the new session.
     * @param {capabilities.ProxyConfig} proxy The proxy configuration to use.
     * @return {!Options} A self reference.
     */
    setProxy(proxy: webdriver.ProxyConfig): Options;

    /**
     * Converts this options instance to a {@link capabilities.Capabilities}
     *     object.
     * @param {capabilities.Capabilities=} opt_capabilities The capabilities to
     *     merge these options into, if any.
     * @return {!capabilities.Capabilities} The capabilities.
     */
    toCapabilities(opt_capabilities?: webdriver.Capabilities): webdriver.Capabilities;
  }

  class Driver extends webdriver.WebDriver {
    /**
     * @param {(capabilities.Capabilities|Options)=} opt_config The configuration
     *     options.
     * @param {remote.DriverService=} opt_service The session to use; will use
     *     the {@link getDefaultService default service} by default.
     * @param {promise.ControlFlow=} opt_flow The control flow to use,
     *     or {@code null} to use the currently active flow.
     */
    constructor(opt_config?: webdriver.Capabilities|Options, opt_service?: remote.DriverService, opt_flow?: webdriver.promise.ControlFlow);

    /**
     * This function is a no-op as file detectors are not supported by this
     * implementation.
     * @override
     */
    setFileDetector(): void;
  }
}

declare namespace remote {
  /**
   * A record object that defines the configuration options for a DriverService
   * instance.
   *
   * @record
   */
  interface ServiceOptions {}

  /**
   * Manages the life and death of a native executable WebDriver server.
   *
   * It is expected that the driver server implements the
   * https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol.
   * Furthermore, the managed server should support multiple concurrent sessions,
   * so that this class may be reused for multiple clients.
   */
  class DriverService {
    /**
     * @param {string} executable Path to the executable to run.
     * @param {!ServiceOptions} options Configuration options for the service.
     */
    constructor(executable: string, options: ServiceOptions);

    /**
     * @return {!promise.Promise<string>} A promise that resolves to
     *    the server's address.
     * @throws {Error} If the server has not been started.
     */
    address(): webdriver.promise.Promise<string>;

    /**
     * Returns whether the underlying process is still running. This does not take
     * into account whether the process is in the process of shutting down.
     * @return {boolean} Whether the underlying service process is running.
     */
    isRunning(): boolean;

    /**
     * Starts the server if it is not already running.
     * @param {number=} opt_timeoutMs How long to wait, in milliseconds, for the
     *     server to start accepting requests. Defaults to 30 seconds.
     * @return {!promise.Promise<string>} A promise that will resolve
     *     to the server's base URL when it has started accepting requests. If the
     *     timeout expires before the server has started, the promise will be
     *     rejected.
     */
    start(opt_timeoutMs?: number): webdriver.promise.Promise<string>;

    /**
     * Stops the service if it is not currently running. This function will kill
     * the server immediately. To synchronize with the active control flow, use
     * {@link #stop()}.
     * @return {!promise.Promise} A promise that will be resolved when
     *     the server has been stopped.
     */
    kill(): webdriver.promise.Promise<any>;

    /**
     * Schedules a task in the current control flow to stop the server if it is
     * currently running.
     * @return {!promise.Promise} A promise that will be resolved when
     *     the server has been stopped.
     */
    stop(): webdriver.promise.Promise<any>;
  }
}

declare namespace safari {
  class Server {}

  /**
   * @return {!Promise<string>} A promise that will resolve with the path
   *     to Safari on the current system.
   */
  function findSafariExecutable(): any;

  /**
   * @param {string} serverUrl The URL to connect to.
   * @return {!Promise<string>} A promise for the path to a file that Safari can
   *     open on start-up to trigger a new connection to the WebSocket server.
   */
  function createConnectFile(serverUrl: string): any;

  /**
   * Deletes all session data files if so desired.
   * @param {!Object} desiredCapabilities .
   * @return {!Array<promise.Promise>} A list of promises for the deleted files.
   */
  function cleanSession(desiredCapabilities: webdriver.Capabilities): any[];

  /** @return {string} . */
  function getRandomString(): string;

  /**
   * @implements {command.Executor}
   */
  class CommandExecutor {
  }

  /**
   * Configuration options specific to the {@link Driver SafariDriver}.
   */
  class Options {
    /**
     * Extracts the SafariDriver specific options from the given capabilities
     * object.
     * @param {!Capabilities} capabilities The capabilities object.
     * @return {!Options} The ChromeDriver options.
     */
    static fromCapabilities(capabilities: webdriver.Capabilities): Options;

    /**
     * Sets whether to force Safari to start with a clean session. Enabling this
     * option will cause all global browser data to be deleted.
     * @param {boolean} clean Whether to make sure the session has no cookies,
     *     cache entries, local storage, or databases.
     * @return {!Options} A self reference.
     */
    setCleanSession(clean: boolean): Options;

    /**
     * Sets the logging preferences for the new session.
     * @param {!./lib/logging.Preferences} prefs The logging preferences.
     * @return {!Options} A self reference.
     */
    setLoggingPrefs(prefs: webdriver.logging.Preferences): Options;

    /**
     * Converts this options instance to a {@link Capabilities} object.
     * @param {Capabilities=} opt_capabilities The capabilities to
     *     merge these options into, if any.
     * @return {!Capabilities} The capabilities.
     */
    toCapabilities(opt_capabilities: webdriver.Capabilities): webdriver.Capabilities;
  }

  /**
   * A WebDriver client for Safari. This class should never be instantiated
   * directly; instead, use the {@linkplain ./builder.Builder Builder}:
   *
   *     var driver = new Builder()
   *         .forBrowser('safari')
   *         .build();
   *
   */
  class Driver extends webdriver.WebDriver {
    /**
     * @param {(Options|Capabilities)=} opt_config The configuration
     *     options for the new session.
     * @param {promise.ControlFlow=} opt_flow The control flow to create
     *     the driver under.
     */
    constructor(opt_config?: Options|webdriver.Capabilities, opt_flow?: webdriver.promise.ControlFlow);

  }
}

declare namespace webdriver {

    namespace error {
        class IError extends Error {
          constructor(opt_error?: string);

          code(): number;
        }

        /**
         * The base WebDriver error type. This error type is only used directly when a
         * more appropriate category is not defined for the offending error.
         */
        class WebDriverError extends IError {
          /** @param {string=} opt_error the error message, if any. */
          constructor(opt_error?: string);
        }

        /**
         * An attempt was made to select an element that cannot be selected.
         */
        class ElementNotSelectableError extends WebDriverError {
          /** @param {string=} opt_error the error message, if any. */
          constructor(opt_error?: string);
        }

        /**
         * An element command could not be completed because the element is not visible
         * on the page.
         */
        class ElementNotVisibleError extends WebDriverError {
          /** @param {string=} opt_error the error message, if any. */
          constructor(opt_error?: string);
        }

        /**
         * The arguments passed to a command are either invalid or malformed.
         */
        class InvalidArgumentError extends WebDriverError {
          /** @param {string=} opt_error the error message, if any. */
          constructor(opt_error?: string);
        }

        /**
         * An illegal attempt was made to set a cookie under a different domain than
         * the current page.
         */
        class InvalidCookieDomainError extends WebDriverError {
          /** @param {string=} opt_error the error message, if any. */
          constructor(opt_error?: string);
        }

        /**
         * The coordinates provided to an interactions operation are invalid.
         */
        class InvalidElementCoordinatesError extends WebDriverError {
          /** @param {string=} opt_error the error message, if any. */
          constructor(opt_error?: string);
        }

        /**
         * An element command could not be completed because the element is in an
         * invalid state, e.g. attempting to click an element that is no longer attached
         * to the document.
         */
        class InvalidElementStateError extends WebDriverError {
          /** @param {string=} opt_error the error message, if any. */
          constructor(opt_error?: string);
        }

        /**
         * Argument was an invalid selector.
         */
        class InvalidSelectorError extends WebDriverError {
          /** @param {string=} opt_error the error message, if any. */
          constructor(opt_error?: string);
        }

        /**
         * Occurs when a command is directed to a session that does not exist.
         */
        class NoSuchSessionError extends WebDriverError {
          /** @param {string=} opt_error the error message, if any. */
          constructor(opt_error?: string);
        }

        /**
         * An error occurred while executing JavaScript supplied by the user.
         */
        class JavascriptError extends WebDriverError {
          /** @param {string=} opt_error the error message, if any. */
          constructor(opt_error?: string);
        }

        /**
         * The target for mouse interaction is not in the browser’s viewport and cannot
         * be brought into that viewport.
         */
        class MoveTargetOutOfBoundsError extends WebDriverError {
          /** @param {string=} opt_error the error message, if any. */
          constructor(opt_error?: string);
        }

        /**
         * An attempt was made to operate on a modal dialog when one was not open.
         */
        class NoSuchAlertError extends WebDriverError {
          /** @param {string=} opt_error the error message, if any. */
          constructor(opt_error?: string);
        }

        /**
         * An element could not be located on the page using the given search
         * parameters.
         */
        class NoSuchElementError extends WebDriverError {
          /** @param {string=} opt_error the error message, if any. */
          constructor(opt_error?: string);
        }

        /**
         * A request to switch to a frame could not be satisfied because the frame
         * could not be found.
         */
        class NoSuchFrameError extends WebDriverError {
          /** @param {string=} opt_error the error message, if any. */
          constructor(opt_error?: string);
        }

        /**
         * A request to switch to a window could not be satisfied because the window
         * could not be found.
         */
        class NoSuchWindowError extends WebDriverError {
          /** @param {string=} opt_error the error message, if any. */
          constructor(opt_error?: string);
        }

        /**
         * A script did not complete before its timeout expired.
         */
        class ScriptTimeoutError extends WebDriverError {
          /** @param {string=} opt_error the error message, if any. */
          constructor(opt_error?: string);
        }

        /**
         * A new session could not be created.
         */
        class SessionNotCreatedError extends WebDriverError {
          /** @param {string=} opt_error the error message, if any. */
          constructor(opt_error?: string);
        }

        /**
         * An element command failed because the referenced element is no longer
         * attached to the DOM.
         */
        class StaleElementReferenceError extends WebDriverError {
          /** @param {string=} opt_error the error message, if any. */
          constructor(opt_error?: string);
        }

        /**
         * An operation did not completErrorCodee before its timeout expired.
         */
        class TimeoutError extends WebDriverError {
          /** @param {string=} opt_error the error message, if any. */
          constructor(opt_error?: string);
        }

        /**
         * A request to set a cookie’s value could not be satisfied.
         */
        class UnableToSetCookieError extends WebDriverError {
          /** @param {string=} opt_error the error message, if any. */
          constructor(opt_error?: string);
        }

        /**
         * A screen capture operation was not possible.
         */
        class UnableToCaptureScreenError extends WebDriverError {
          /** @param {string=} opt_error the error message, if any. */
          constructor(opt_error?: string);
        }

        /**
         * A modal dialog was open, blocking this operation.
         */
        class UnexpectedAlertOpenError extends WebDriverError {
          /**
           * @param {string=} opt_error the error message, if any.
           * @param {string=} opt_text the text of the open dialog, if available.
           */
          constructor(opt_error?: string, opt_text?: string);

          /**
           * @return {(string|undefined)} The text displayed with the unhandled alert,
           *     if available.
           */
          getAlertText(): string;
        }

        /**
         * A command could not be executed because the remote end is not aware of it.
         */
        class UnknownCommandError extends WebDriverError {
          /** @param {string=} opt_error the error message, if any. */
          constructor(opt_error?: string);
        }

        /**
         * The requested command matched a known URL but did not match an method for
         * that URL.
         */
        class UnknownMethodError extends WebDriverError {
          /** @param {string=} opt_error the error message, if any. */
          constructor(opt_error?: string);
        }

        /**
         * Reports an unsupport operation.
         */
        class UnsupportedOperationError extends WebDriverError {
          /** @param {string=} opt_error the error message, if any. */
          constructor(opt_error?: string);
        }
    }

    namespace logging {

        /**
         * A hash describing log preferences.
         * @typedef {Object.<webdriver.logging.Type, webdriver.logging.LevelName>}
         */
        class Preferences {
            setLevel(type: string|Type, level: Level|string|number): void;
            toJSON(): { [key: string]: string };
        }

        /**
         * Common log types.
         * @enum {string}
         */
        enum Type {
          /** Logs originating from the browser. */
          BROWSER,
          /** Logs from a WebDriver client. */
          CLIENT,
          /** Logs from a WebDriver implementation. */
          DRIVER,
          /** Logs related to performance. */
          PERFORMANCE,
          /** Logs from the remote server. */
          SERVER
        }

        /**
         * Defines a message level that may be used to control logging output.
         *
         * @final
         */
        class Level {
          name_: string;
          value_: number;
          /**
           * @param {string} name the level's name.
           * @param {number} level the level's numeric value.
           */
          constructor(name: string, level: number);

          /** @override */
          toString(): string;

          /** This logger's name. */
          name(): string;

          /** The numeric log level. */
          value(): number;

          /**
           * Indicates no log messages should be recorded.
           * @const
           */
          static OFF: Level;
          /**
           * Log messages with a level of `1000` or higher.
           * @const
           */
          static SEVERE: Level;
          /**
           * Log messages with a level of `900` or higher.
           * @const
           */
          static WARNING: Level;
          /**
           * Log messages with a level of `800` or higher.
           * @const
           */
          static INFO: Level;
          /**
           * Log messages with a level of `700` or higher.
           * @const
           */
          static DEBUG: Level;
          /**
           * Log messages with a level of `500` or higher.
           * @const
           */
          static FINE: Level;
          /**
           * Log messages with a level of `400` or higher.
           * @const
           */
          static FINER: Level;
          /**
           * Log messages with a level of `300` or higher.
           * @const
           */
          static FINEST: Level;
          /**
           * Indicates all log messages should be recorded.
           * @const
           */
          static ALL: Level;
        }

        /**
         * Converts a level name or value to a {@link webdriver.logging.Level} value.
         * If the name/value is not recognized, {@link webdriver.logging.Level.ALL}
         * will be returned.
         * @param {(number|string)} nameOrValue The log level name, or value, to
         *     convert .
         * @return {!webdriver.logging.Level} The converted level.
         */
        function getLevel(nameOrValue: string|number): Level;

        interface IEntryJSON {
          level: string;
          message: string;
          timestamp: number;
          type: string;
        }

        /**
         * A single log entry.
         */
        class Entry {
          /**
           * @param {(!webdriver.logging.Level|string)} level The entry level.
           * @param {string} message The log message.
           * @param {number=} opt_timestamp The time this entry was generated, in
           *     milliseconds since 0:00:00, January 1, 1970 UTC. If omitted, the
           *     current time will be used.
           * @param {string=} opt_type The log type, if known.
           * @constructor
           */
          constructor(level: Level|string|number, message: string, opt_timestamp?:number, opt_type?:string|Type);

          /** @type {!webdriver.logging.Level} */
          level: Level;

          /** @type {string} */
          message: string;

          /** @type {number} */
          timestamp: number;

          /** @type {string} */
          type: string;

          /**
           * @return {{level: string, message: string, timestamp: number,
           *           type: string}} The JSON representation of this entry.
           */
          toJSON(): IEntryJSON;
        }

        /**
         * An object used to log debugging messages. Loggers use a hierarchical,
         * dot-separated naming scheme. For instance, "foo" is considered the parent of
         * the "foo.bar" and an ancestor of "foo.bar.baz".
         *
         * Each logger may be assigned a {@linkplain #setLevel log level}, which
         * controls which level of messages will be reported to the
         * {@linkplain #addHandler handlers} attached to this instance. If a log level
         * is not explicitly set on a logger, it will inherit its parent.
         *
         * This class should never be directly instantiated. Instead, users should
         * obtain logger references using the {@linkplain ./logging.getLogger()
         * getLogger()} function.
         *
         * @final
         */
        class Logger {
          /**
           * @param {string} name the name of this logger.
           * @param {Level=} opt_level the initial level for this logger.
           */
          constructor(name: string, opt_level?: Level);

          /** @private {string} */
          name_: string;
          /** @private {Level} */
          level_: Level;
          /** @private {Logger} */
          parent_: Logger;
          /** @private {Set<function(!Entry)>} */
          handlers_: any;

          /** @return {string} the name of this logger. */
          getName(): string;

          /**
           * @param {Level} level the new level for this logger, or `null` if the logger
           *     should inherit its level from its parent logger.
           */
          setLevel(level: Level): void;

          /** @return {Level} the log level for this logger. */
          getLevel(): Level;

          /**
           * @return {!Level} the effective level for this logger.
           */
          getEffectiveLevel(): Level;

          /**
           * @param {!Level} level the level to check.
           * @return {boolean} whether messages recorded at the given level are loggable
           *     by this instance.
           */
          isLoggable(level: Level): boolean;

          /**
           * Adds a handler to this logger. The handler will be invoked for each message
           * logged with this instance, or any of its descendants.
           *
           * @param {function(!Entry)} handler the handler to add.
           */
          addHandler(handler: any): void;

          /**
           * Removes a handler from this logger.
           *
           * @param {function(!Entry)} handler the handler to remove.
           * @return {boolean} whether a handler was successfully removed.
           */
          removeHandler(handler: any): void;

          /**
           * Logs a message at the given level. The message may be defined as a string
           * or as a function that will return the message. If a function is provided,
           * it will only be invoked if this logger's
           * {@linkplain #getEffectiveLevel() effective log level} includes the given
           * `level`.
           *
           * @param {!Level} level the level at which to log the message.
           * @param {(string|function(): string)} loggable the message to log, or a
           *     function that will return the message.
           */
          log(level: Level, loggable: string|Function): void;

          /**
           * Logs a message at the {@link Level.SEVERE} log level.
           * @param {(string|function(): string)} loggable the message to log, or a
           *     function that will return the message.
           */
          severe(loggable: string|Function): void;

          /**
           * Logs a message at the {@link Level.WARNING} log level.
           * @param {(string|function(): string)} loggable the message to log, or a
           *     function that will return the message.
           */
          warning(loggable: string|Function): void;

          /**
           * Logs a message at the {@link Level.INFO} log level.
           * @param {(string|function(): string)} loggable the message to log, or a
           *     function that will return the message.
           */
          info(loggable: string|Function): void;

          /**
           * Logs a message at the {@link Level.DEBUG} log level.
           * @param {(string|function(): string)} loggable the message to log, or a
           *     function that will return the message.
           */
          debug(loggable: string|Function): void;

          /**
           * Logs a message at the {@link Level.FINE} log level.
           * @param {(string|function(): string)} loggable the message to log, or a
           *     function that will return the message.
           */
          fine(loggable: string|Function): void;

          /**
           * Logs a message at the {@link Level.FINER} log level.
           * @param {(string|function(): string)} loggable the message to log, or a
           *     function that will return the message.
           */
          finer(loggable: string|Function): void;

          /**
           * Logs a message at the {@link Level.FINEST} log level.
           * @param {(string|function(): string)} loggable the message to log, or a
           *     function that will return the message.
           */
          finest(loggable: string|Function): void;
        }

        /**
         * Maintains a collection of loggers.
         *
         * @final
         */
        class LogManager {
          /**
           * Retrieves a named logger, creating it in the process. This function will
           * implicitly create the requested logger, and any of its parents, if they
           * do not yet exist.
           *
           * @param {string} name the logger's name.
           * @return {!Logger} the requested logger.
           */
          getLogger(name: string): Logger;

          /**
           * Creates a new logger.
           *
           * @param {string} name the logger's name.
           * @param {!Logger} parent the logger's parent.
           * @return {!Logger} the new logger.
           * @private
           */
          createLogger_(name: string, parent: Logger): Logger;
        }
    }

    namespace promise {
        //region Functions

        /**
         * Given an array of promises, will return a promise that will be fulfilled
         * with the fulfillment values of the input array's values. If any of the
         * input array's promises are rejected, the returned promise will be rejected
         * with the same reason.
         *
         * @param {!Array<(T|!ManagedPromise<T>)>} arr An array of
         *     promises to wait on.
         * @return {!ManagedPromise<!Array<T>>} A promise that is
         *     fulfilled with an array containing the fulfilled values of the
         *     input array, or rejected with the same reason as the first
         *     rejected value.
         * @template T
         */
        function all<T>(arr: Array<T|Promise<T>>): Promise<T[]>;

        /**
         * Invokes the appropriate callback function as soon as a promised
         * {@code value} is resolved. This function is similar to
         * {@link webdriver.promise.when}, except it does not return a new promise.
         * @param {*} value The value to observe.
         * @param {Function} callback The function to call when the value is
         *     resolved successfully.
         * @param {Function=} opt_errback The function to call when the value is
         *     rejected.
         */
        function asap(value: any, callback: Function, opt_errback?: Function): void;

        /**
         * @return {!webdriver.promise.ControlFlow} The currently active control flow.
         */
        function controlFlow(): ControlFlow;

        /**
         * Creates a new control flow. The provided callback will be invoked as the
         * first task within the new flow, with the flow as its sole argument. Returns
         * a promise that resolves to the callback result.
         * @param {function(!ControlFlow)} callback The entry point
         *     to the newly created flow.
         * @return {!ManagedPromise} A promise that resolves to the callback
         *     result.
         */
        function createFlow<R>(callback: (flow: ControlFlow) => R): Promise<R>;

        /**
         * Determines whether a {@code value} should be treated as a promise.
         * Any object whose "then" property is a function will be considered a promise.
         *
         * @param {*} value The value to test.
         * @return {boolean} Whether the value is a promise.
         */
        function isPromise(value: any): boolean;

        /**
         * Tests is a function is a generator.
         * @param {!Function} fn The function to test.
         * @return {boolean} Whether the function is a generator.
         */
        function isGenerator(fn: Function): boolean;

        /**
         * Creates a promise that will be resolved at a set time in the future.
         * @param {number} ms The amount of time, in milliseconds, to wait before
         *     resolving the promise.
         * @return {!ManagedPromise} The promise.
         */
        function delayed(ms: number): Promise<void>;

        /**
         * Calls a function for each element in an array, and if the function returns
         * true adds the element to a new array.
         *
         * If the return value of the filter function is a promise, this function
         * will wait for it to be fulfilled before determining whether to insert the
         * element into the new array.
         *
         * If the filter function throws or returns a rejected promise, the promise
         * returned by this function will be rejected with the same reason. Only the
         * first failure will be reported; all subsequent errors will be silently
         * ignored.
         *
         * @param {!(Array<TYPE>|ManagedPromise<!Array<TYPE>>)} arr The
         *     array to iterator over, or a promise that will resolve to said array.
         * @param {function(this: SELF, TYPE, number, !Array<TYPE>): (
         *             boolean|ManagedPromise<boolean>)} fn The function
         *     to call for each element in the array.
         * @param {SELF=} opt_self The object to be used as the value of 'this' within
         *     {@code fn}.
         * @template TYPE, SELF
         */
        function filter<T>(arr: Array<T>|Promise<Array<T>>, fn: (element: T, type: any, index: number, array: T[]) => any, opt_self?: any): Promise<T[]>;

        /**
         * Creates a new deferred object.
         * @return {!webdriver.promise.Deferred} The new deferred object.
         */
        function defer<T>(): Deferred<T>;

        /**
         * Creates a promise that has been resolved with the given value.
         * @param {T=} opt_value The resolved value.
         * @return {!ManagedPromise<T>} The resolved promise.
         * @template T
         */
        function fulfilled<T>(opt_value?: T): Promise<T>;

        /**
         * Calls a function for each element in an array and inserts the result into a
         * new array, which is used as the fulfillment value of the promise returned
         * by this function.
         *
         * If the return value of the mapping function is a promise, this function
         * will wait for it to be fulfilled before inserting it into the new array.
         *
         * If the mapping function throws or returns a rejected promise, the
         * promise returned by this function will be rejected with the same reason.
         * Only the first failure will be reported; all subsequent errors will be
         * silently ignored.
         *
         * @param {!(Array<TYPE>|ManagedPromise<!Array<TYPE>>)} arr The
         *     array to iterator over, or a promise that will resolve to said array.
         * @param {function(this: SELF, TYPE, number, !Array<TYPE>): ?} fn The
         *     function to call for each element in the array. This function should
         *     expect three arguments (the element, the index, and the array itself.
         * @param {SELF=} opt_self The object to be used as the value of 'this' within
         *     {@code fn}.
         * @template TYPE, SELF
         */
        function map<T>(arr: Array<T>|Promise<Array<T>>, fn: (self: any, type: any, index: number, array: any[]) => any, opt_self?: any): Promise<T[]>

        /**
         * Creates a promise that has been rejected with the given reason.
         * @param {*=} opt_reason The rejection reason; may be any value, but is
         *     usually an Error or a string.
         * @return {!ManagedPromise<T>} The rejected promise.
         * @template T
         */
        function rejected<T>(opt_reason?: any): Promise<T>;

        /**
         * Wraps a function that expects a node-style callback as its final
         * argument. This callback expects two arguments: an error value (which will be
         * null if the call succeeded), and the success value as the second argument.
         * The callback will the resolve or reject the returned promise, based on its
         * arguments.
         * @param {!Function} fn The function to wrap.
         * @param {...?} var_args The arguments to apply to the function, excluding the
         *     final callback.
         * @return {!ManagedPromise} A promise that will be resolved with the
         *     result of the provided function's callback.
         */
        function checkedNodeCall<T>(fn: Function, ...var_args: any[]): Promise<T>;

        /**
         * Consumes a {@code GeneratorFunction}. Each time the generator yields a
         * promise, this function will wait for it to be fulfilled before feeding the
         * fulfilled value back into {@code next}. Likewise, if a yielded promise is
         * rejected, the rejection error will be passed to {@code throw}.
         *
         * __Example 1:__ the Fibonacci Sequence.
         *
         *     promise.consume(function* fibonacci() {
         *       var n1 = 1, n2 = 1;
         *       for (var i = 0; i < 4; ++i) {
         *         var tmp = yield n1 + n2;
         *         n1 = n2;
         *         n2 = tmp;
         *       }
         *       return n1 + n2;
         *     }).then(function(result) {
         *       console.log(result);  // 13
         *     });
         *
         * __Example 2:__ a generator that throws.
         *
         *     promise.consume(function* () {
         *       yield promise.delayed(250).then(function() {
         *         throw Error('boom');
         *       });
         *     }).catch(function(e) {
         *       console.log(e.toString());  // Error: boom
         *     });
         *
         * @param {!Function} generatorFn The generator function to execute.
         * @param {Object=} opt_self The object to use as "this" when invoking the
         *     initial generator.
         * @param {...*} var_args Any arguments to pass to the initial generator.
         * @return {!ManagedPromise<?>} A promise that will resolve to the
         *     generator's final result.
         * @throws {TypeError} If the given function is not a generator.
         */
        function consume<T>(generatorFn: Function, opt_self?: any, ...var_args: any[]): Promise<T>;

        /**
         * Registers an observer on a promised {@code value}, returning a new promise
         * that will be resolved when the value is. If {@code value} is not a promise,
         * then the return promise will be immediately resolved.
         * @param {*} value The value to observe.
         * @param {Function=} opt_callback The function to call when the value is
         *     resolved successfully.
         * @param {Function=} opt_errback The function to call when the value is
         *     rejected.
         * @return {!ManagedPromise} A new promise.
         */
        function when<T,R>(value: T|Promise<T>, opt_callback?: (value: T) => any, opt_errback?: (error: any) => any): Promise<R>;

        /**
         * Returns a promise that will be resolved with the input value in a
         * fully-resolved state. If the value is an array, each element will be fully
         * resolved. Likewise, if the value is an object, all keys will be fully
         * resolved. In both cases, all nested arrays and objects will also be
         * fully resolved.  All fields are resolved in place; the returned promise will
         * resolve on {@code value} and not a copy.
         *
         * Warning: This function makes no checks against objects that contain
         * cyclical references:
         *
         *     var value = {};
         *     value['self'] = value;
         *     promise.fullyResolved(value);  // Stack overflow.
         *
         * @param {*} value The value to fully resolve.
         * @return {!ManagedPromise} A promise for a fully resolved version
         *     of the input value.
         */
        function fullyResolved<T>(value: any): Promise<T>;

        /**
         * Changes the default flow to use when no others are active.
         * @param {!ControlFlow} flow The new default flow.
         * @throws {Error} If the default flow is not currently active.
         */
        function setDefaultFlow(flow: ControlFlow): void;

        //endregion

        /**
         * Error used when the computation of a promise is cancelled.
         */
        class CancellationError extends Error {
          /**
           * @param {string=} opt_msg The cancellation message.
           */
          constructor(opt_msg?: string);
        }

        interface IThenable<T> {
            /**
             * Cancels the computation of this promise's value, rejecting the promise in
             * the process. This method is a no-op if the promise has already been
             * resolved.
             *
             * @param {(string|Error)=} opt_reason The reason this promise is being
             *     cancelled. This value will be wrapped in a {@link CancellationError}.
             */
            cancel(opt_reason?: string|Error): void;

            /** @return {boolean} Whether this promise's value is still being computed. */
            isPending(): boolean;

            /**
             * Registers listeners for when this instance is resolved.
             *
             * @param {?(function(T): (R|IThenable<R>))=} opt_callback The
             *     function to call if this promise is successfully resolved. The function
             *     should expect a single argument: the promise's resolved value.
             * @param {?(function(*): (R|IThenable<R>))=} opt_errback
             *     The function to call if this promise is rejected. The function should
             *     expect a single argument: the rejection reason.
             * @return {!ManagedPromise<R>} A new promise which will be
             *     resolved with the result of the invoked callback.
             * @template R
             */
            then<R>(opt_callback?: (value: T) => R|IThenable<R>, opt_errback?: (error: any) => R|IThenable<R>): Promise<R>;

            /**
             * Registers a listener for when this promise is rejected. This is synonymous
             * with the {@code catch} clause in a synchronous API:
             *
             *     // Synchronous API:
             *     try {
             *       doSynchronousWork();
             *     } catch (ex) {
             *       console.error(ex);
             *     }
             *
             *     // Asynchronous promise API:
             *     doAsynchronousWork().catch(function(ex) {
             *       console.error(ex);
             *     });
             *
             * @param {function(*): (R|IThenable<R>)} errback The
             *     function to call if this promise is rejected. The function should
             *     expect a single argument: the rejection reason.
             * @return {!ManagedPromise<R>} A new promise which will be
             *     resolved with the result of the invoked callback.
             * @template R
             */
            catch<R>(errback: Function): Promise<R>;
        }

        /**
         * Thenable is a promise-like object with a {@code then} method which may be
         * used to schedule callbacks on a promised value.
         *
         * @interface
         * @template T
         */
        class Thenable<T> implements IThenable<T> {
            /**
             * Cancels the computation of this promise's value, rejecting the promise in
             * the process. This method is a no-op if the promise has already been
             * resolved.
             *
             * @param {(string|Error)=} opt_reason The reason this promise is being
             *     cancelled. This value will be wrapped in a {@link CancellationError}.
             */
            cancel(opt_reason?: string|Error): void;

            /** @return {boolean} Whether this promise's value is still being computed. */
            isPending(): boolean;

            /**
             * Registers listeners for when this instance is resolved.
             *
             * @param {?(function(T): (R|IThenable<R>))=} opt_callback The
             *     function to call if this promise is successfully resolved. The function
             *     should expect a single argument: the promise's resolved value.
             * @param {?(function(*): (R|IThenable<R>))=} opt_errback
             *     The function to call if this promise is rejected. The function should
             *     expect a single argument: the rejection reason.
             * @return {!ManagedPromise<R>} A new promise which will be
             *     resolved with the result of the invoked callback.
             * @template R
             */
            then<R>(opt_callback?: (value: T) => R|IThenable<R>, opt_errback?: (error: any) => R|IThenable<R>): Promise<R>;

            /**
             * Registers a listener for when this promise is rejected. This is synonymous
             * with the {@code catch} clause in a synchronous API:
             *
             *     // Synchronous API:
             *     try {
             *       doSynchronousWork();
             *     } catch (ex) {
             *       console.error(ex);
             *     }
             *
             *     // Asynchronous promise API:
             *     doAsynchronousWork().catch(function(ex) {
             *       console.error(ex);
             *     });
             *
             * @param {function(*): (R|IThenable<R>)} errback The
             *     function to call if this promise is rejected. The function should
             *     expect a single argument: the rejection reason.
             * @return {!ManagedPromise<R>} A new promise which will be
             *     resolved with the result of the invoked callback.
             * @template R
             */
            catch<R>(errback: Function): Promise<R>;

            /**
             * Registers a listener to invoke when this promise is resolved, regardless
             * of whether the promise's value was successfully computed. This function
             * is synonymous with the {@code finally} clause in a synchronous API:
             *
             *     // Synchronous API:
             *     try {
             *       doSynchronousWork();
             *     } finally {
             *       cleanUp();
             *     }
             *
             *     // Asynchronous promise API:
             *     doAsynchronousWork().finally(cleanUp);
             *
             * __Note:__ similar to the {@code finally} clause, if the registered
             * callback returns a rejected promise or throws an error, it will silently
             * replace the rejection error (if any) from this promise:
             *
             *     try {
             *       throw Error('one');
             *     } finally {
             *       throw Error('two');  // Hides Error: one
             *     }
             *
             *     promise.rejected(Error('one'))
             *         .finally(function() {
             *           throw Error('two');  // Hides Error: one
             *         });
             *
             * @param {function(): (R|IThenable<R>)} callback The function to call when
             *     this promise is resolved.
             * @return {!ManagedPromise<R>} A promise that will be fulfilled
             *     with the callback result.
             * @template R
             */
            finally<R>(callback: Function): Promise<R>;

            /**
             * Adds a property to a class prototype to allow runtime checks of whether
             * instances of that class implement the Thenable interface. This function
             * will also ensure the prototype's {@code then} function is exported from
             * compiled code.
             * @param {function(new: Thenable, ...?)} ctor The
             *     constructor whose prototype to modify.
             */
            static addImplementation(ctor: Function): void;

            /**
             * Checks if an object has been tagged for implementing the Thenable
             * interface as defined by {@link Thenable.addImplementation}.
             * @param {*} object The object to test.
             * @return {boolean} Whether the object is an implementation of the Thenable
             *     interface.
             */
            static isImplementation(object: any): boolean;
        }

        interface IFulfilledCallback<T> {
          (value: T|IThenable<T>|Thenable<T>|void): void;
        }

        interface IRejectedCallback {
          (reason: any): void;
        }

        /**
         * Represents the eventual value of a completed operation. Each promise may be
         * in one of three states: pending, fulfilled, or rejected. Each promise starts
         * in the pending state and may make a single transition to either a
         * fulfilled or rejected state, at which point the promise is considered
         * resolved.
         *
         * @implements {promise.Thenable<T>}
         * @template T
         * @see http://promises-aplus.github.io/promises-spec/
         */
        class Promise<T> implements IThenable<T> {
            /**
             * @param {function(
             *           function((T|IThenable<T>|Thenable)=),
             *           function(*=))} resolver
             *     Function that is invoked immediately to begin computation of this
             *     promise's value. The function should accept a pair of callback
             *     functions, one for fulfilling the promise and another for rejecting it.
             * @param {ControlFlow=} opt_flow The control flow
             *     this instance was created under. Defaults to the currently active flow.
             */
            constructor(resolver: (onFulfilled: IFulfilledCallback<T>, onRejected: IRejectedCallback)=>void, opt_flow?: ControlFlow);
            constructor(); // For angular-protractor/angular-protractor-tests.ts

            //region Methods

            /**
             * Cancels the computation of this promise's value, rejecting the promise in the
             * process.
             * @param {*} reason The reason this promise is being cancelled. If not an
             *     {@code Error}, one will be created using the value's string
             *     representation.
             */
            cancel(opt_reason?: string|Error): void;

            /** @return {boolean} Whether this promise's value is still being computed. */
            isPending(): boolean;

            /**
             * Registers listeners for when this instance is resolved. This function most
             * overridden by subtypes.
             *
             * @param opt_callback The function to call if this promise is
             *     successfully resolved. The function should expect a single argument: the
             *     promise's resolved value.
             * @param opt_errback The function to call if this promise is
             *     rejected. The function should expect a single argument: the rejection
             *     reason.
             * @return A new promise which will be resolved
             *     with the result of the invoked callback.
             */
            then(opt_callback?: Function, opt_errback?: Function): Promise<any>;

            /**
             * Registers a listener for when this promise is rejected. This is synonymous
             * with the {@code catch} clause in a synchronous API:
             * <pre><code>
             *   // Synchronous API:
             *   try {
             *     doSynchronousWork();
             *   } catch (ex) {
             *     console.error(ex);
             *   }
             *
             *   // Asynchronous promise API:
             *   doAsynchronousWork().thenCatch(function(ex) {
             *     console.error(ex);
             *   });
             * </code></pre>
             *
             * @param {function(*): (R|webdriver.promise.Promise.<R>)} errback The function
             *     to call if this promise is rejected. The function should expect a single
             *     argument: the rejection reason.
             * @return {!webdriver.promise.Promise.<R>} A new promise which will be
             *     resolved with the result of the invoked callback.
             * @template R
             */
            thenCatch<R>(errback: (error: any) => any): Promise<R>;

            /**
             * Registers a listener for when this promise is rejected. This is synonymous
             * with the {@code catch} clause in a synchronous API:
             *
             *     // Synchronous API:
             *     try {
             *       doSynchronousWork();
             *     } catch (ex) {
             *       console.error(ex);
             *     }
             *
             *     // Asynchronous promise API:
             *     doAsynchronousWork().catch(function(ex) {
             *       console.error(ex);
             *     });
             *
             * @param {function(*): (R|IThenable<R>)} errback The
             *     function to call if this promise is rejected. The function should
             *     expect a single argument: the rejection reason.
             * @return {!ManagedPromise<R>} A new promise which will be
             *     resolved with the result of the invoked callback.
             * @template R
             */
            catch<R>(errback: Function): Promise<R>;


            /**
             * Registers a listener to invoke when this promise is resolved, regardless
             * of whether the promise's value was successfully computed. This function
             * is synonymous with the {@code finally} clause in a synchronous API:
             * <pre><code>
             *   // Synchronous API:
             *   try {
             *     doSynchronousWork();
             *   } finally {
             *     cleanUp();
             *   }
             *
             *   // Asynchronous promise API:
             *   doAsynchronousWork().thenFinally(cleanUp);
             * </code></pre>
             *
             * <b>Note:</b> similar to the {@code finally} clause, if the registered
             * callback returns a rejected promise or throws an error, it will silently
             * replace the rejection error (if any) from this promise:
             * <pre><code>
             *   try {
             *     throw Error('one');
             *   } finally {
             *     throw Error('two');  // Hides Error: one
             *   }
             *
             *   webdriver.promise.rejected(Error('one'))
             *       .thenFinally(function() {
             *         throw Error('two');  // Hides Error: one
             *       });
             * </code></pre>
             *
             *
             * @param {function(): (R|webdriver.promise.Promise.<R>)} callback The function
             *     to call when this promise is resolved.
             * @return {!webdriver.promise.Promise.<R>} A promise that will be fulfilled
             *     with the callback result.
             * @template R
             */
            thenFinally<R>(callback: Function): Promise<R>;

            //endregion
        }

        /**
         * Represents a value that will be resolved at some point in the future. This
         * class represents the protected "producer" half of a Promise - each Deferred
         * has a {@code promise} property that may be returned to consumers for
         * registering callbacks, reserving the ability to resolve the deferred to the
         * producer.
         *
         * <p>If this Deferred is rejected and there are no listeners registered before
         * the next turn of the event loop, the rejection will be passed to the
         * {@link webdriver.promise.ControlFlow} as an unhandled failure.
         *
         * <p>If this Deferred is cancelled, the cancellation reason will be forward to
         * the Deferred's canceller function (if provided). The canceller may return a
         * truth-y value to override the reason provided for rejection.
         *
         * @extends {webdriver.promise.Promise}
         */
        class Deferred<T> extends Promise<T> {
            //region Constructors

            /**
             *
             * @param {webdriver.promise.ControlFlow=} opt_flow The control flow
             *     this instance was created under. This should only be provided during
             *     unit tests.
             * @constructor
             */
            constructor(opt_flow?: ControlFlow);

            //endregion

            static State_: {
                BLOCKED: number;
                PENDING: number;
                REJECTED: number;
                RESOLVED: number;
            };

            //region Properties

            /**
             * The consumer promise for this instance. Provides protected access to the
             * callback registering functions.
             * @type {!webdriver.promise.Promise}
             */
            promise: Promise<T>;

            //endregion

            //region Methods

            /**
             * Rejects this promise. If the error is itself a promise, this instance will
             * be chained to it and be rejected with the error's resolved value.
             * @param {*=} opt_error The rejection reason, typically either a
             *     {@code Error} or a {@code string}.
             */
            reject(opt_error?: any): void;
            errback(opt_error?: any): void;

            /**
             * Resolves this promise with the given value. If the value is itself a
             * promise and not a reference to this deferred, this instance will wait for
             * it before resolving.
             * @param {*=} opt_value The resolved value.
             */
            fulfill(opt_value?: T): void;

            /**
             * Removes all of the listeners previously registered on this deferred.
             * @throws {Error} If this deferred has already been resolved.
             */
            removeAll(): void;

            //endregion
        }

        interface IControlFlowTimer {
            clearInterval: (ms: number) => void;
            clearTimeout: (ms: number) => void;
            setInterval: (fn: Function, ms: number) => number;
            setTimeout: (fn: Function, ms: number) => number;
        }

        /**
         * Handles the execution of scheduled tasks, each of which may be an
         * asynchronous operation. The control flow will ensure tasks are executed in
         * the ordered scheduled, starting each task only once those before it have
         * completed.
         *
         * Each task scheduled within this flow may return a
         * {@link webdriver.promise.Promise} to indicate it is an asynchronous
         * operation. The ControlFlow will wait for such promises to be resolved before
         * marking the task as completed.
         *
         * Tasks and each callback registered on a {@link webdriver.promise.Promise}
         * will be run in their own ControlFlow frame.  Any tasks scheduled within a
         * frame will take priority over previously scheduled tasks. Furthermore, if any
         * of the tasks in the frame fail, the remainder of the tasks in that frame will
         * be discarded and the failure will be propagated to the user through the
         * callback/task's promised result.
         *
         * Each time a ControlFlow empties its task queue, it will fire an
         * {@link webdriver.promise.ControlFlow.EventType.IDLE IDLE} event. Conversely,
         * whenever the flow terminates due to an unhandled error, it will remove all
         * remaining tasks in its queue and fire an
         * {@link webdriver.promise.ControlFlow.EventType.UNCAUGHT_EXCEPTION
         * UNCAUGHT_EXCEPTION} event. If there are no listeners registered with the
         * flow, the error will be rethrown to the global error handler.
         *
         * @extends {EventEmitter}
         * @final
         */
        class ControlFlow extends EventEmitter {
            /**
             * @constructor
             */
            constructor();

            /**
             * Events that may be emitted by an {@link webdriver.promise.ControlFlow}.
             * @enum {string}
             */
            static EventType: {
                /** Emitted when all tasks have been successfully executed. */
                    IDLE: string;

                /** Emitted when a ControlFlow has been reset. */
                    RESET: string;

                /** Emitted whenever a new task has been scheduled. */
                    SCHEDULE_TASK: string;

                /**
                 * Emitted whenever a control flow aborts due to an unhandled promise
                 * rejection. This event will be emitted along with the offending rejection
                 * reason. Upon emitting this event, the control flow will empty its task
                 * queue and revert to its initial state.
                 */
                    UNCAUGHT_EXCEPTION: string;
            };

            /**
             * Returns a string representation of this control flow, which is its current
             * {@link #getSchedule() schedule}, sans task stack traces.
             * @return {string} The string representation of this contorl flow.
             * @override
             */
            toString(): string;

            /**
             * Resets this instance, clearing its queue and removing all event listeners.
             */
            reset(): void;

            /**
             * Generates an annotated string describing the internal state of this control
             * flow, including the currently executing as well as pending tasks. If
             * {@code opt_includeStackTraces === true}, the string will include the
             * stack trace from when each task was scheduled.
             * @param {string=} opt_includeStackTraces Whether to include the stack traces
             *     from when each task was scheduled. Defaults to false.
             * @return {string} String representation of this flow's internal state.
             */
            getSchedule(opt_includeStackTraces?: boolean): string;

            /**
             * Schedules a task for execution. If there is nothing currently in the
             * queue, the task will be executed in the next turn of the event loop. If
             * the task function is a generator, the task will be executed using
             * {@link webdriver.promise.consume}.
             *
             * @param {function(): (T|promise.Promise<T>)} fn The function to
             *     call to start the task. If the function returns a
             *     {@link webdriver.promise.Promise}, this instance will wait for it to be
             *     resolved before starting the next task.
             * @param {string=} opt_description A description of the task.
             * @return {!promise.Promise<T>} A promise that will be resolved
             *     with the result of the action.
             * @template T
             */
            execute<T>(fn: ()=>(T|Promise<T>), opt_description?: string): Promise<T>;

            /**
             * Inserts a {@code setTimeout} into the command queue. This is equivalent to
             * a thread sleep in a synchronous programming language.
             *
             * @param {number} ms The timeout delay, in milliseconds.
             * @param {string=} opt_description A description to accompany the timeout.
             * @return {!webdriver.promise.Promise} A promise that will be resolved with
             *     the result of the action.
             */
            timeout(ms: number, opt_description?: string): Promise<void>;

            /**
             * Schedules a task that shall wait for a condition to hold. Each condition
             * function may return any value, but it will always be evaluated as a boolean.
             *
             * Condition functions may schedule sub-tasks with this instance, however,
             * their execution time will be factored into whether a wait has timed out.
             *
             * In the event a condition returns a Promise, the polling loop will wait for
             * it to be resolved before evaluating whether the condition has been satisfied.
             * The resolution time for a promise is factored into whether a wait has timed
             * out.
             *
             * If the condition function throws, or returns a rejected promise, the
             * wait task will fail.
             *
             * If the condition is defined as a promise, the flow will wait for it to
             * settle. If the timeout expires before the promise settles, the promise
             * returned by this function will be rejected.
             *
             * If this function is invoked with `timeout === 0`, or the timeout is omitted,
             * the flow will wait indefinitely for the condition to be satisfied.
             *
             * @param {(!promise.Promise<T>|function())} condition The condition to poll,
             *     or a promise to wait on.
             * @param {number=} opt_timeout How long to wait, in milliseconds, for the
             *     condition to hold before timing out. If omitted, the flow will wait
             *     indefinitely.
             * @param {string=} opt_message An optional error message to include if the
             *     wait times out; defaults to the empty string.
             * @return {!promise.Promise<T>} A promise that will be fulfilled
             *     when the condition has been satisified. The promise shall be rejected if
             *     the wait times out waiting for the condition.
             * @throws {TypeError} If condition is not a function or promise or if timeout
             *     is not a number >= 0.
             * @template T
             */
            wait<T>(condition: Promise<T>|Function, opt_timeout?: number, opt_message?: string): Promise<T>;
        }
    }

    namespace until {
        /**
         * Defines a condition to
         */
        class Condition<T> {
            /**
             * @param {string} message A descriptive error message. Should complete the
             *     sentence "Waiting [...]"
             * @param {function(!webdriver.WebDriver): OUT} fn The condition function to
             *     evaluate on each iteration of the wait loop.
             * @constructor
             */
            constructor(message: string, fn: (webdriver: WebDriver) => any);

            /** @return {string} A description of this condition. */
            description(): string;

            /** @type {function(!webdriver.WebDriver): OUT} */
            fn(webdriver: WebDriver): any;
        }

        /**
         * Creates a condition that will wait until the input driver is able to switch
         * to the designated frame. The target frame may be specified as
         *
         * 1. a numeric index into
         *     [window.frames](https://developer.mozilla.org/en-US/docs/Web/API/Window.frames)
         *     for the currently selected frame.
         * 2. a {@link ./webdriver.WebElement}, which must reference a FRAME or IFRAME
         *     element on the current page.
         * 3. a locator which may be used to first locate a FRAME or IFRAME on the
         *     current page before attempting to switch to it.
         *
         * Upon successful resolution of this condition, the driver will be left
         * focused on the new frame.
         *
         * @param {!(number|./webdriver.WebElement|By|
         *           function(!./webdriver.WebDriver): !./webdriver.WebElement)} frame
         *     The frame identifier.
         * @return {!Condition<boolean>} A new condition.
         */
        function ableToSwitchToFrame(frame: number|WebElement|By|((webdriver: WebDriver)=>WebElement)): Condition<boolean>;

        /**
         * Creates a condition that waits for an alert to be opened. Upon success, the
         * returned promise will be fulfilled with the handle for the opened alert.
         *
         * @return {!Condition<!./webdriver.Alert>} The new condition.
         */
        function alertIsPresent(): Condition<Alert>;

        /**
         * Creates a condition that will wait for the given element to be disabled.
         *
         * @param {!webdriver.WebElement} element The element to test.
         * @return {!until.Condition.<boolean>} The new condition.
         * @see webdriver.WebDriver#isEnabled
         */
        function elementIsDisabled(element: WebElement): Condition<boolean>;

        /**
         * Creates a condition that will wait for the given element to be enabled.
         *
         * @param {!webdriver.WebElement} element The element to test.
         * @return {!until.Condition.<boolean>} The new condition.
         * @see webdriver.WebDriver#isEnabled
         */
        function elementIsEnabled(element: WebElement): Condition<boolean>;

        /**
         * Creates a condition that will wait for the given element to be deselected.
         *
         * @param {!webdriver.WebElement} element The element to test.
         * @return {!until.Condition.<boolean>} The new condition.
         * @see webdriver.WebDriver#isSelected
         */
        function elementIsNotSelected(element: WebElement): Condition<boolean>;

        /**
         * Creates a condition that will wait for the given element to be in the DOM,
         * yet not visible to the user.
         *
         * @param {!webdriver.WebElement} element The element to test.
         * @return {!until.Condition.<boolean>} The new condition.
         * @see webdriver.WebDriver#isDisplayed
         */
        function elementIsNotVisible(element: WebElement): Condition<boolean>;

        /**
         * Creates a condition that will wait for the given element to be selected.
         * @param {!webdriver.WebElement} element The element to test.
         * @return {!until.Condition.<boolean>} The new condition.
         * @see webdriver.WebDriver#isSelected
         */
        function elementIsSelected(element: WebElement): Condition<boolean>;

        /**
         * Creates a condition that will wait for the given element to become visible.
         *
         * @param {!webdriver.WebElement} element The element to test.
         * @return {!until.Condition.<boolean>} The new condition.
         * @see webdriver.WebDriver#isDisplayed
         */
        function elementIsVisible(element: WebElement): Condition<boolean>;

        /**
         * Creates a condition that will loop until an element is
         * {@link ./webdriver.WebDriver#findElement found} with the given locator.
         *
         * @param {!(By|Function)} locator The locator to use.
         * @return {!until.Condition.<!webdriver.WebElement>} The new condition.
         */
        function elementLocated(locator: By|Function): Condition<WebElement>;

        /**
         * Creates a condition that will wait for the given element's
         * {@link webdriver.WebDriver#getText visible text} to contain the given
         * substring.
         *
         * @param {!webdriver.WebElement} element The element to test.
         * @param {string} substr The substring to search for.
         * @return {!until.Condition.<boolean>} The new condition.
         * @see webdriver.WebDriver#getText
         */
        function elementTextContains(element: WebElement, substr: string): Condition<boolean>;

        /**
         * Creates a condition that will wait for the given element's
         * {@link webdriver.WebDriver#getText visible text} to match the given
         * {@code text} exactly.
         *
         * @param {!webdriver.WebElement} element The element to test.
         * @param {string} text The expected text.
         * @return {!until.Condition.<boolean>} The new condition.
         * @see webdriver.WebDriver#getText
         */
        function elementTextIs(element: WebElement, text: string): Condition<boolean>;

        /**
         * Creates a condition that will wait for the given element's
         * {@link webdriver.WebDriver#getText visible text} to match a regular
         * expression.
         *
         * @param {!webdriver.WebElement} element The element to test.
         * @param {!RegExp} regex The regular expression to test against.
         * @return {!until.Condition<boolean>} The new condition.
         * @see webdriver.WebDriver#getText
         */
        function elementTextMatches(element: WebElement, regex: RegExp): Condition<boolean>;

        /**
         * Creates a condition that will loop until at least one element is
         * {@link webdriver.WebDriver#findElement found} with the given locator.
         *
         * @param {!(webdriver.Locator|webdriver.By.Hash|Function)} locator The locator
         *     to use.
         * @return {!until.Condition.<!Array.<!webdriver.WebElement>>} The new
         *     condition.
         */
        function elementsLocated(locator: By|Function): Condition<WebElement[]>;

        /**
         * Creates a condition that will wait for the given element to become stale. An
         * element is considered stale once it is removed from the DOM, or a new page
         * has loaded.
         *
         * @param {!webdriver.WebElement} element The element that should become stale.
         * @return {!until.Condition<boolean>} The new condition.
         */
        function stalenessOf(element: WebElement): Condition<boolean>;

        /**
         * Creates a condition that will wait for the current page's title to contain
         * the given substring.
         *
         * @param {string} substr The substring that should be present in the page
         *     title.
         * @return {!until.Condition.<boolean>} The new condition.
         */
        function titleContains(substr: string): Condition<boolean>;

        /**
         * Creates a condition that will wait for the current page's title to match the
         * given value.
         *
         * @param {string} title The expected page title.
         * @return {!until.Condition<boolean>} The new condition.
         */
        function titleIs(title: string): Condition<boolean>;

        /**
         * Creates a condition that will wait for the current page's title to match the
         * given regular expression.
         *
         * @param {!RegExp} regex The regular expression to test against.
         * @return {!until.Condition.<boolean>} The new condition.
         */
        function titleMatches(regex: RegExp): Condition<boolean>;
    }

    interface ILocation {
        x: number;
        y: number;
    }

    interface ISize {
        width: number;
        height: number;
    }

    /**
     * Representations of pressable keys that aren't text.  These are stored in
     * the Unicode PUA (Private Use Area) code points, 0xE000-0xF8FF.  Refer to
     * http://www.google.com.au/search?&q=unicode+pua&btnG=Search
     *
     * @enum {string}
     */
    enum Button {
        LEFT,
        MIDDLE,
        RIGHT,
    }

    /**
     * Representations of pressable keys that aren't text.  These are stored in
     * the Unicode PUA (Private Use Area) code points, 0xE000-0xF8FF.  Refer to
     * http://www.google.com.au/search?&q=unicode+pua&btnG=Search
     *
     * @enum {string}
     */
    enum Key {
        NULL,
        CANCEL,  // ^break
        HELP,
        BACK_SPACE,
        TAB,
        CLEAR,
        RETURN,
        ENTER,
        SHIFT,
        CONTROL,
        ALT,
        PAUSE,
        ESCAPE,
        SPACE,
        PAGE_UP,
        PAGE_DOWN,
        END,
        HOME,
        ARROW_LEFT,
        LEFT,
        ARROW_UP,
        UP,
        ARROW_RIGHT,
        RIGHT,
        ARROW_DOWN,
        DOWN,
        INSERT,
        DELETE,
        SEMICOLON,
        EQUALS,

        NUMPAD0,  // number pad keys
        NUMPAD1,
        NUMPAD2,
        NUMPAD3,
        NUMPAD4,
        NUMPAD5,
        NUMPAD6,
        NUMPAD7,
        NUMPAD8,
        NUMPAD9,
        MULTIPLY,
        ADD,
        SEPARATOR,
        SUBTRACT,
        DECIMAL,
        DIVIDE,

        F1,  // function keys
        F2,
        F3,
        F4,
        F5,
        F6,
        F7,
        F8,
        F9,
        F10,
        F11,
        F12,

        COMMAND,  // Apple command key
        META      // alias for Windows key

    }

    /**
     * Class for defining sequences of complex user interactions. Each sequence
     * will not be executed until {@link #perform} is called.
     *
     * Example:
     *
     *     new ActionSequence(driver).
     *         keyDown(Key.SHIFT).
     *         click(element1).
     *         click(element2).
     *         dragAndDrop(element3, element4).
     *         keyUp(Key.SHIFT).
     *         perform();
     *
     */
    class ActionSequence {

        //region Constructors

        /**
         * @param {!webdriver.WebDriver} driver The driver instance to use.
         * @constructor
         */
        constructor(driver: WebDriver);

        //endregion

        //region Methods

        /**
         * Executes this action sequence.
         * @return {!webdriver.promise.Promise} A promise that will be resolved once
         *     this sequence has completed.
         */
        perform(): webdriver.promise.Promise<void>;

        /**
         * Moves the mouse.  The location to move to may be specified in terms of the
         * mouse's current location, an offset relative to the top-left corner of an
         * element, or an element (in which case the middle of the element is used).
         *
         * @param {(!./webdriver.WebElement|{x: number, y: number})} location The
         *     location to drag to, as either another WebElement or an offset in
         *     pixels.
         * @param {{x: number, y: number}=} opt_offset If the target {@code location}
         *     is defined as a {@link ./webdriver.WebElement}, this parameter defines
         *     an offset within that element. The offset should be specified in pixels
         *     relative to the top-left corner of the element's bounding box. If
         *     omitted, the element's center will be used as the target offset.
         * @return {!ActionSequence} A self reference.
         */
        mouseMove(location: WebElement|ILocation, opt_offset?: ILocation): ActionSequence;

        /**
         * Presses a mouse button. The mouse button will not be released until
         * {@link #mouseUp} is called, regardless of whether that call is made in this
         * sequence or another. The behavior for out-of-order events (e.g. mouseDown,
         * click) is undefined.
         *
         * If an element is provided, the mouse will first be moved to the center
         * of that element. This is equivalent to:
         *
         *     sequence.mouseMove(element).mouseDown()
         *
         * Warning: this method currently only supports the left mouse button. See
         * [issue 4047](http://code.google.com/p/selenium/issues/detail?id=4047).
         *
         * @param {(./webdriver.WebElement|input.Button)=} opt_elementOrButton Either
         *     the element to interact with or the button to click with.
         *     Defaults to {@link input.Button.LEFT} if neither an element nor
         *     button is specified.
         * @param {input.Button=} opt_button The button to use. Defaults to
         *     {@link input.Button.LEFT}. Ignored if a button is provided as the
         *     first argument.
         * @return {!ActionSequence} A self reference.
         */
        mouseDown(opt_elementOrButton?: WebElement|webdriver.Button, opt_button?: webdriver.Button): ActionSequence;

        /**
         * Releases a mouse button. Behavior is undefined for calling this function
         * without a previous call to {@link #mouseDown}.
         *
         * If an element is provided, the mouse will first be moved to the center
         * of that element. This is equivalent to:
         *
         *     sequence.mouseMove(element).mouseUp()
         *
         * Warning: this method currently only supports the left mouse button. See
         * [issue 4047](http://code.google.com/p/selenium/issues/detail?id=4047).
         *
         * @param {(./webdriver.WebElement|input.Button)=} opt_elementOrButton Either
         *     the element to interact with or the button to click with.
         *     Defaults to {@link input.Button.LEFT} if neither an element nor
         *     button is specified.
         * @param {input.Button=} opt_button The button to use. Defaults to
         *     {@link input.Button.LEFT}. Ignored if a button is provided as the
         *     first argument.
         * @return {!ActionSequence} A self reference.
         */
        mouseUp(opt_elementOrButton?: WebElement|webdriver.Button, opt_button?: webdriver.Button): ActionSequence;

        /**
         * Convenience function for performing a "drag and drop" manuever. The target
         * element may be moved to the location of another element, or by an offset (in
         * pixels).
         *
         * @param {!./webdriver.WebElement} element The element to drag.
         * @param {(!./webdriver.WebElement|{x: number, y: number})} location The
         *     location to drag to, either as another WebElement or an offset in
         *     pixels.
         * @return {!ActionSequence} A self reference.
         */
        dragAndDrop(element: WebElement, location: WebElement|ILocation): ActionSequence;

        /**
         * Clicks a mouse button.
         *
         * If an element is provided, the mouse will first be moved to the center
         * of that element. This is equivalent to:
         *
         *     sequence.mouseMove(element).click()
         *
         * @param {(./webdriver.WebElement|input.Button)=} opt_elementOrButton Either
         *     the element to interact with or the button to click with.
         *     Defaults to {@link input.Button.LEFT} if neither an element nor
         *     button is specified.
         * @param {input.Button=} opt_button The button to use. Defaults to
         *     {@link input.Button.LEFT}. Ignored if a button is provided as the
         *     first argument.
         * @return {!ActionSequence} A self reference.
         */
        click(opt_elementOrButton?: WebElement|webdriver.Button, opt_button?: webdriver.Button): ActionSequence;

        /**
         * Double-clicks a mouse button.
         *
         * If an element is provided, the mouse will first be moved to the center of
         * that element. This is equivalent to:
         *
         *     sequence.mouseMove(element).doubleClick()
         *
         * Warning: this method currently only supports the left mouse button. See
         * [issue 4047](http://code.google.com/p/selenium/issues/detail?id=4047).
         *
         * @param {(./webdriver.WebElement|input.Button)=} opt_elementOrButton Either
         *     the element to interact with or the button to click with.
         *     Defaults to {@link input.Button.LEFT} if neither an element nor
         *     button is specified.
         * @param {input.Button=} opt_button The button to use. Defaults to
         *     {@link input.Button.LEFT}. Ignored if a button is provided as the
         *     first argument.
         * @return {!ActionSequence} A self reference.
         */
        doubleClick(opt_elementOrButton?: WebElement|webdriver.Button, opt_button?: webdriver.Button): ActionSequence;

        /**
         * Performs a modifier key press. The modifier key is <em>not released</em>
         * until {@link #keyUp} or {@link #sendKeys} is called. The key press will be
         * targetted at the currently focused element.
         * @param {!webdriver.Key} key The modifier key to push. Must be one of
         *     {ALT, CONTROL, SHIFT, COMMAND, META}.
         * @return {!webdriver.ActionSequence} A self reference.
         * @throws {Error} If the key is not a valid modifier key.
         */
        keyDown(key: Key): ActionSequence;

        /**
         * Performs a modifier key release. The release is targetted at the currently
         * focused element.
         * @param {!webdriver.Key} key The modifier key to release. Must be one of
         *     {ALT, CONTROL, SHIFT, COMMAND, META}.
         * @return {!webdriver.ActionSequence} A self reference.
         * @throws {Error} If the key is not a valid modifier key.
         */
        keyUp(key: Key): ActionSequence;

        /**
         * Simulates typing multiple keys. Each modifier key encountered in the
         * sequence will not be released until it is encountered again. All key events
         * will be targetted at the currently focused element.
         * @param {...(string|!webdriver.Key|!Array.<(string|!webdriver.Key)>)} var_args
         *     The keys to type.
         * @return {!webdriver.ActionSequence} A self reference.
         * @throws {Error} If the key is not a valid modifier key.
         */
        sendKeys(...var_args: Array<string|Key>): ActionSequence;

        //endregion
    }


    /**
     * Class for defining sequences of user touch interactions. Each sequence
     * will not be executed until {@link #perform} is called.
     *
     * Example:
     *
     *     new webdriver.TouchSequence(driver).
     *         tapAndHold({x: 0, y: 0}).
     *         move({x: 3, y: 4}).
     *         release({x: 10, y: 10}).
     *         perform();
     */
    class TouchSequence {
      /*
       * @param {!webdriver.WebDriver} driver The driver instance to use.
       * @constructor
       */
      constructor(driver: WebDriver);


      /**
       * Executes this action sequence.
       * @return {!webdriver.promise.Promise} A promise that will be resolved once
       *     this sequence has completed.
       */
      perform(): webdriver.promise.Promise<void>;


      /**
       * Taps an element.
       *
       * @param {!webdriver.WebElement} elem The element to tap.
       * @return {!webdriver.TouchSequence} A self reference.
       */
      tap(elem: WebElement): TouchSequence;


      /**
       * Double taps an element.
       *
       * @param {!webdriver.WebElement} elem The element to double tap.
       * @return {!webdriver.TouchSequence} A self reference.
       */
      doubleTap(elem: WebElement): TouchSequence;


      /**
       * Long press on an element.
       *
       * @param {!webdriver.WebElement} elem The element to long press.
       * @return {!webdriver.TouchSequence} A self reference.
       */
      longPress(elem: WebElement): TouchSequence;


      /**
       * Touch down at the given location.
       *
       * @param {{ x: number, y: number }} location The location to touch down at.
       * @return {!webdriver.TouchSequence} A self reference.
       */
      tapAndHold(location: ILocation): TouchSequence;


      /**
       * Move a held {@linkplain #tapAndHold touch} to the specified location.
       *
       * @param {{x: number, y: number}} location The location to move to.
       * @return {!webdriver.TouchSequence} A self reference.
       */
      move(location: ILocation): TouchSequence;


      /**
       * Release a held {@linkplain #tapAndHold touch} at the specified location.
       *
       * @param {{x: number, y: number}} location The location to release at.
       * @return {!webdriver.TouchSequence} A self reference.
       */
      release(location: ILocation): TouchSequence;


      /**
       * Scrolls the touch screen by the given offset.
       *
       * @param {{x: number, y: number}} offset The offset to scroll to.
       * @return {!webdriver.TouchSequence} A self reference.
       */
      scroll(offset: IOffset): TouchSequence;

      /**
       * Scrolls the touch screen, starting on `elem` and moving by the specified
       * offset.
       *
       * @param {!webdriver.WebElement} elem The element where scroll starts.
       * @param {{x: number, y: number}} offset The offset to scroll to.
       * @return {!webdriver.TouchSequence} A self reference.
       */
      scrollFromElement(elem: WebElement, offset: IOffset): TouchSequence;

      /**
       * Flick, starting anywhere on the screen, at speed xspeed and yspeed.
       *
       * @param {{xspeed: number, yspeed: number}} speed The speed to flick in each
       direction, in pixels per second.
       * @return {!webdriver.TouchSequence} A self reference.
       */
      flick(speed: ISpeed): TouchSequence;

      /**
       * Flick starting at elem and moving by x and y at specified speed.
       *
       * @param {!webdriver.WebElement} elem The element where flick starts.
       * @param {{x: number, y: number}} offset The offset to flick to.
       * @param {number} speed The speed to flick at in pixels per second.
       * @return {!webdriver.TouchSequence} A self reference.
       */
      flickElement(elem: WebElement, offset: IOffset, speed: number): TouchSequence;
    }

    interface IOffset {
      x: number;
      y: number;
    }

    interface ISpeed {
      xspeed: number;
      yspeed: number;
    }

    /**
     * Represents a modal dialog such as {@code alert}, {@code confirm}, or
     * {@code prompt}. Provides functions to retrieve the message displayed with
     * the alert, accept or dismiss the alert, and set the response text (in the
     * case of {@code prompt}).
     */
    class Alert {
        /**
         * @param {!WebDriver} driver The driver controlling the browser this alert
         *     is attached to.
         * @param {string} text The message text displayed with this alert.
         */
        constructor(driver: WebDriver, text: string);

        //region Methods

        /**
         * Retrieves the message text displayed with this alert. For instance, if the
         * alert were opened with alert("hello"), then this would return "hello".
         * @return {!webdriver.promise.Promise} A promise that will be resolved to the
         *     text displayed with this alert.
         */
        getText(): webdriver.promise.Promise<string>;

        /**
         * Sets the username and password in an alert prompting for credentials (such
         * as a Basic HTTP Auth prompt). This method will implicitly
         * {@linkplain #accept() submit} the dialog.
         *
         * @param {string} username The username to send.
         * @param {string} password The password to send.
         * @return {!promise.Promise<void>} A promise that will be resolved when this
         *     command has completed.
         */
        authenticateAs(username: string, password: string): webdriver.promise.Promise<void>;

        /**
         * Accepts this alert.
         * @return {!webdriver.promise.Promise} A promise that will be resolved when
         *     this command has completed.
         */
        accept(): webdriver.promise.Promise<void>;

        /**
         * Dismisses this alert.
         * @return {!webdriver.promise.Promise} A promise that will be resolved when
         *     this command has completed.
         */
        dismiss(): webdriver.promise.Promise<void>;

        /**
         * Sets the response text on this alert. This command will return an error if
         * the underlying alert does not support response text (e.g. window.alert and
         * window.confirm).
         * @param {string} text The text to set.
         * @return {!webdriver.promise.Promise} A promise that will be resolved when
         *     this command has completed.
         */
        sendKeys(text: string): webdriver.promise.Promise<void>;

        //endregion

    }

    /**
     * AlertPromise is a promise that will be fulfilled with an Alert. This promise
     * serves as a forward proxy on an Alert, allowing calls to be scheduled
     * directly on this instance before the underlying Alert has been fulfilled. In
     * other words, the following two statements are equivalent:
     *
     *     driver.switchTo().alert().dismiss();
     *     driver.switchTo().alert().then(function(alert) {
     *       return alert.dismiss();
     *     });
     *
     * @implements {promise.Thenable.<!webdriver.Alert>}
     * @final
     */
    class AlertPromise extends Alert implements webdriver.promise.IThenable<Alert>{
      /**
       * @param {!WebDriver} driver The driver controlling the browser this
       *     alert is attached to.
       * @param {!promise.Thenable<!Alert>} alert A thenable
       *     that will be fulfilled with the promised alert.
       */
      constructor(driver: WebDriver, alert: webdriver.promise.Promise<Alert>);

            //region Methods

            /**
             * Cancels the computation of this promise's value, rejecting the promise in the
             * process.
             * @param {*} reason The reason this promise is being cancelled. If not an
             *     {@code Error}, one will be created using the value's string
             *     representation.
             */
            cancel(opt_reason?: string|Error): void;

            /** @return {boolean} Whether this promise's value is still being computed. */
            isPending(): boolean;

            /**
             * Registers listeners for when this instance is resolved. This function most
             * overridden by subtypes.
             *
             * @param opt_callback The function to call if this promise is
             *     successfully resolved. The function should expect a single argument: the
             *     promise's resolved value.
             * @param opt_errback The function to call if this promise is
             *     rejected. The function should expect a single argument: the rejection
             *     reason.
             * @return A new promise which will be resolved
             *     with the result of the invoked callback.
             */
            then(opt_callback?: Function, opt_errback?: Function): webdriver.promise.Promise<any>;

            /**
             * Registers a listener for when this promise is rejected. This is synonymous
             * with the {@code catch} clause in a synchronous API:
             * <pre><code>
             *   // Synchronous API:
             *   try {
             *     doSynchronousWork();
             *   } catch (ex) {
             *     console.error(ex);
             *   }
             *
             *   // Asynchronous promise API:
             *   doAsynchronousWork().thenCatch(function(ex) {
             *     console.error(ex);
             *   });
             * </code></pre>
             *
             * @param {function(*): (R|webdriver.promise.Promise.<R>)} errback The function
             *     to call if this promise is rejected. The function should expect a single
             *     argument: the rejection reason.
             * @return {!webdriver.promise.Promise.<R>} A new promise which will be
             *     resolved with the result of the invoked callback.
             * @template R
             */
            thenCatch<R>(errback: (error: any) => any): webdriver.promise.Promise<R>;

            /**
             * Registers a listener for when this promise is rejected. This is synonymous
             * with the {@code catch} clause in a synchronous API:
             *
             *     // Synchronous API:
             *     try {
             *       doSynchronousWork();
             *     } catch (ex) {
             *       console.error(ex);
             *     }
             *
             *     // Asynchronous promise API:
             *     doAsynchronousWork().catch(function(ex) {
             *       console.error(ex);
             *     });
             *
             * @param {function(*): (R|IThenable<R>)} errback The
             *     function to call if this promise is rejected. The function should
             *     expect a single argument: the rejection reason.
             * @return {!ManagedPromise<R>} A new promise which will be
             *     resolved with the result of the invoked callback.
             * @template R
             */
            catch<R>(errback: Function): webdriver.promise.Promise<R>;


            /**
             * Registers a listener to invoke when this promise is resolved, regardless
             * of whether the promise's value was successfully computed. This function
             * is synonymous with the {@code finally} clause in a synchronous API:
             * <pre><code>
             *   // Synchronous API:
             *   try {
             *     doSynchronousWork();
             *   } finally {
             *     cleanUp();
             *   }
             *
             *   // Asynchronous promise API:
             *   doAsynchronousWork().thenFinally(cleanUp);
             * </code></pre>
             *
             * <b>Note:</b> similar to the {@code finally} clause, if the registered
             * callback returns a rejected promise or throws an error, it will silently
             * replace the rejection error (if any) from this promise:
             * <pre><code>
             *   try {
             *     throw Error('one');
             *   } finally {
             *     throw Error('two');  // Hides Error: one
             *   }
             *
             *   webdriver.promise.rejected(Error('one'))
             *       .thenFinally(function() {
             *         throw Error('two');  // Hides Error: one
             *       });
             * </code></pre>
             *
             *
             * @param {function(): (R|webdriver.promise.Promise.<R>)} callback The function
             *     to call when this promise is resolved.
             * @return {!webdriver.promise.Promise.<R>} A promise that will be fulfilled
             *     with the callback result.
             * @template R
             */
            thenFinally<R>(callback: Function): webdriver.promise.Promise<R>;
    }

    /** @deprecated Use {@link error.UnexpectedAlertOpenError} instead. */
    class UnhandledAlertError extends webdriver.error.UnexpectedAlertOpenError {
    }

    /**
     * Recognized browser names.
     * @enum {string}
     */
    interface IBrowser {
        ANDROID: string;
        CHROME: string;
        EDGE: string;
        FIREFOX: string;
        IE: string;
        INTERNET_EXPLORER: string;
        IPAD: string;
        IPHONE: string;
        OPERA: string;
        PHANTOM_JS: string;
        SAFARI: string;
        HTMLUNIT: string;
    }

    var Browser: IBrowser;

    interface ProxyConfig {
        proxyType: string;
        proxyAutoconfigUrl?: string;
        ftpProxy?: string;
        httpProxy?: string;
        sslProxy?: string;
        noProxy?: string;
    }

    /**
     * Creates new {@link webdriver.WebDriver WebDriver} instances. The environment
     * variables listed below may be used to override a builder's configuration,
     * allowing quick runtime changes.
     *
     * - {@code SELENIUM_BROWSER}: defines the target browser in the form
     *   {@code browser[:version][:platform]}.
     *
     * - {@code SELENIUM_REMOTE_URL}: defines the remote URL for all builder
     *   instances. This environment variable should be set to a fully qualified
     *   URL for a WebDriver server (e.g. http://localhost:4444/wd/hub). This
     *   option always takes precedence over {@code SELENIUM_SERVER_JAR}.
     *
     * - {@code SELENIUM_SERVER_JAR}: defines the path to the
     *   <a href="http://selenium-release.storage.googleapis.com/index.html">
     *   standalone Selenium server</a> jar to use. The server will be started the
     *   first time a WebDriver instance and be killed when the process exits.
     *
     * Suppose you had mytest.js that created WebDriver with
     *
     *     var driver = new webdriver.Builder()
     *         .forBrowser('chrome')
     *         .build();
     *
     * This test could be made to use Firefox on the local machine by running with
     * `SELENIUM_BROWSER=firefox node mytest.js`. Rather than change the code to
     * target Google Chrome on a remote machine, you can simply set the
     * `SELENIUM_BROWSER` and `SELENIUM_REMOTE_URL` environment variables:
     *
     *     SELENIUM_BROWSER=chrome:36:LINUX \
     *     SELENIUM_REMOTE_URL=http://www.example.com:4444/wd/hub \
     *     node mytest.js
     *
     * You could also use a local copy of the standalone Selenium server:
     *
     *     SELENIUM_BROWSER=chrome:36:LINUX \
     *     SELENIUM_SERVER_JAR=/path/to/selenium-server-standalone.jar \
     *     node mytest.js
     */
    class Builder {

        //region Constructors

        /**
         * @constructor
         */
        constructor();

        //endregion

        //region Methods

        /**
         * Configures this builder to ignore any environment variable overrides and to
         * only use the configuration specified through this instance's API.
         *
         * @return {!Builder} A self reference.
         */
        disableEnvironmentOverrides(): Builder;

        /**
         * Creates a new WebDriver client based on this builder's current
         * configuration.
         *
         * While this method will immediately return a new WebDriver instance, any
         * commands issued against it will be deferred until the associated browser
         * has been fully initialized. Users may call {@link #buildAsync()} to obtain
         * a promise that will not be fulfilled until the browser has been created
         * (the difference is purely in style).
         *
         * @return {!webdriver.WebDriver} A new WebDriver instance.
         * @throws {Error} If the current configuration is invalid.
         * @see #buildAsync()
         */
        build(): WebDriver;

        /**
         * Creates a new WebDriver client based on this builder's current
         * configuration. This method returns a promise that will not be fulfilled
         * until the new browser session has been fully initialized.
         *
         * __Note:__ this method is purely a convenience wrapper around
         * {@link #build()}.
         *
         * @return {!promise.Promise<!webdriver.WebDriver>} A promise that will be
         *    fulfilled with the newly created WebDriver instance once the browser
         *    has been fully initialized.
         * @see #build()
         */
        buildAsync(): webdriver.promise.Promise<WebDriver>;

        /**
         * Configures the target browser for clients created by this instance.
         * Any calls to {@link #withCapabilities} after this function will
         * overwrite these settings.
         *
         * <p>You may also define the target browser using the {@code SELENIUM_BROWSER}
         * environment variable. If set, this environment variable should be of the
         * form {@code browser[:[version][:platform]]}.
         *
         * @param {(string|webdriver.Browser)} name The name of the target browser;
         *     common defaults are available on the {@link webdriver.Browser} enum.
         * @param {string=} opt_version A desired version; may be omitted if any
         *     version should be used.
         * @param {string=} opt_platform The desired platform; may be omitted if any
         *     version may be used.
         * @return {!Builder} A self reference.
         */
        forBrowser(name: string, opt_version?: string, opt_platform?: string): Builder;

        /**
         * Returns the base set of capabilities this instance is currently configured
         * to use.
         * @return {!webdriver.Capabilities} The current capabilities for this builder.
         */
        getCapabilities(): Capabilities;

        /**
         * @return {string} The URL of the WebDriver server this instance is configured
         *     to use.
         */
        getServerUrl(): string;

        /**
         * @return {?string} The URL of the proxy server to use for the WebDriver's
         *    HTTP connections, or `null` if not set.
         */
        getWebDriverProxy(): string;

        /**
         * Sets the default action to take with an unexpected alert before returning
         * an error.
         * @param {string} beahvior The desired behavior; should be "accept", "dismiss",
         *     or "ignore". Defaults to "dismiss".
         * @return {!Builder} A self reference.
         */
        setAlertBehavior(behavior: string): Builder;

        /**
         * Sets Chrome-specific options for drivers created by this builder. Any
         * logging or proxy settings defined on the given options will take precedence
         * over those set through {@link #setLoggingPrefs} and {@link #setProxy},
         * respectively.
         *
         * @param {!chrome.Options} options The ChromeDriver options to use.
         * @return {!Builder} A self reference.
         */
        setChromeOptions(options: chrome.Options): Builder;

        /**
         * Sets the control flow that created drivers should execute actions in. If
         * the flow is never set, or is set to {@code null}, it will use the active
         * flow at the time {@link #build()} is called.
         * @param {webdriver.promise.ControlFlow} flow The control flow to use, or
         *     {@code null} to
         * @return {!Builder} A self reference.
         */
        setControlFlow(flow: webdriver.promise.ControlFlow): Builder;

        /**
         * Set {@linkplain edge.Options options} specific to Microsoft's Edge browser
         * for drivers created by this builder. Any proxy settings defined on the
         * given options will take precedence over those set through
         * {@link #setProxy}.
         *
         * @param {!edge.Options} options The MicrosoftEdgeDriver options to use.
         * @return {!Builder} A self reference.
         */
        setEdgeOptions(options: edge.Options): Builder;

        /**
         * Sets whether native events should be used.
         * @param {boolean} enabled Whether to enable native events.
         * @return {!Builder} A self reference.
         */
        setEnableNativeEvents(enabled: boolean): Builder;

        /**
         * Sets Firefox-specific options for drivers created by this builder. Any
         * logging or proxy settings defined on the given options will take precedence
         * over those set through {@link #setLoggingPrefs} and {@link #setProxy},
         * respectively.
         *
         * @param {!firefox.Options} options The FirefoxDriver options to use.
         * @return {!Builder} A self reference.
         */
        setFirefoxOptions(options: firefox.Options): Builder;

        /**
         * Set Internet Explorer specific {@linkplain ie.Options options} for drivers
         * created by this builder. Any proxy settings defined on the given options
         * will take precedence over those set through {@link #setProxy}.
         *
         * @param {!ie.Options} options The IEDriver options to use.
         * @return {!Builder} A self reference.
         */
        setIeOptions(options: ie.Options): Builder;

        /**
         * Sets the logging preferences for the created session. Preferences may be
         * changed by repeated calls, or by calling {@link #withCapabilities}.
         * @param {!(webdriver.logging.Preferences|Object.<string, string>)} prefs The
         *     desired logging preferences.
         * @return {!Builder} A self reference.
         */
        setLoggingPrefs(prefs: webdriver.logging.Preferences|Object): Builder;

        /**
         * Sets Opera specific {@linkplain opera.Options options} for drivers created
         * by this builder. Any logging or proxy settings defined on the given options
         * will take precedence over those set through {@link #setLoggingPrefs} and
         * {@link #setProxy}, respectively.
         *
         * @param {!opera.Options} options The OperaDriver options to use.
         * @return {!Builder} A self reference.
         */
        setOperaOptions(options: opera.Options): Builder;

        /**
         * Sets the proxy configuration to use for WebDriver clients created by this
         * builder. Any calls to {@link #withCapabilities} after this function will
         * overwrite these settings.
         * @param {!capabilities.ProxyConfig} config The configuration to use.
         * @return {!Builder} A self reference.
         */
        setProxy(config: webdriver.ProxyConfig): Builder;

        /**
         * Sets Safari specific {@linkplain safari.Options options} for drivers
         * created by this builder. Any logging settings defined on the given options
         * will take precedence over those set through {@link #setLoggingPrefs}.
         *
         * @param {!safari.Options} options The Safari options to use.
         * @return {!Builder} A self reference.
         */
        setSafari(options: safari.Options): Builder;

        /**
         * Sets how elements should be scrolled into view for interaction.
         * @param {number} behavior The desired scroll behavior: either 0 to align with
         *     the top of the viewport or 1 to align with the bottom.
         * @return {!Builder} A self reference.
         */
        setScrollBehavior(behavior: number): Builder;

        /**
         * Sets the URL of a remote WebDriver server to use. Once a remote URL has been
         * specified, the builder direct all new clients to that server. If this method
         * is never called, the Builder will attempt to create all clients locally.
         *
         * <p>As an alternative to this method, you may also set the
         * {@code SELENIUM_REMOTE_URL} environment variable.
         *
         * @param {string} url The URL of a remote server to use.
         * @return {!Builder} A self reference.
         */
        usingServer(url: string): Builder;

        /**
         * Sets the URL of the proxy to use for the WebDriver's HTTP connections.
         * If this method is never called, the Builder will create a connection
         * without a proxy.
         *
         * @param {string} proxy The URL of a proxy to use.
         * @return {!Builder} A self reference.
         */
        usingWebDriverProxy(proxy: string): Builder;

        /**
         * Sets the desired capabilities when requesting a new session. This will
         * overwrite any previously set capabilities.
         * @param {!(Object|webdriver.Capabilities)} capabilities The desired
         *     capabilities for a new session.
         * @return {!Builder} A self reference.
         */
        withCapabilities(capabilities: Object|Capabilities): Builder;

        //endregion
    }

    /**
     * Describes a mechanism for locating an element on the page.
     * @final
     */
    class By {

      /**
       * @param {string} using the name of the location strategy to use.
       * @param {string} value the value to search for.
       */
      constructor(using: string, value: string);

      /**
       * Locates elements that have a specific class name.
       *
       * @param {string} name The class name to search for.
       * @return {!By} The new locator.
       * @see http://www.w3.org/TR/2011/WD-html5-20110525/elements.html#classes
       * @see http://www.w3.org/TR/CSS2/selector.html#class-html
       */
      static className(name: string): By;

      /**
       * Locates elements using a CSS selector.
       *
       * @param {string} selector The CSS selector to use.
       * @return {!By} The new locator.
       * @see http://www.w3.org/TR/CSS2/selector.html
       */
      static css(selector: string): By;

      /**
       * Locates eleemnts by the ID attribute. This locator uses the CSS selector
       * `*[id="$ID"]`, _not_ `document.getElementById`.
       *
       * @param {string} id The ID to search for.
       * @return {!By} The new locator.
       */
      static id(id: string): By;

      /**
       * Locates link elements whose
       * {@linkplain webdriver.WebElement#getText visible text} matches the given
       * string.
       *
       * @param {string} text The link text to search for.
       * @return {!By} The new locator.
       */
      static linkText(text: string): By;

      /**
       * Locates an elements by evaluating a
       * {@linkplain webdriver.WebDriver#executeScript JavaScript expression}.
       * The result of this expression must be an element or list of elements.
       *
       * @param {!(string|Function)} script The script to execute.
       * @param {...*} var_args The arguments to pass to the script.
       * @return {function(!./webdriver.WebDriver): !./promise.Promise}
       *     A new JavaScript-based locator function.
       */
      static js(script: string|Function, ...var_args: Array<any>): (webdriver: webdriver.WebDriver) => webdriver.promise.Promise<any>;

      /**
       * Locates elements whose `name` attribute has the given value.
       *
       * @param {string} name The name attribute to search for.
       * @return {!By} The new locator.
       */
      static name(name: string): By;

      /**
       * Locates link elements whose
       * {@linkplain webdriver.WebElement#getText visible text} contains the given
       * substring.
       *
       * @param {string} text The substring to check for in a link's visible text.
       * @return {!By} The new locator.
       */
      static partialLinkText(text: string): By;

      /**
       * Locates elements with a given tag name.
       *
       * @param {string} name The tag name to search for.
       * @return {!By} The new locator.
       * @deprecated Use {@link By.css() By.css(tagName)} instead.
       */
      static tagName(name: string): By;

      /**
       * Locates elements matching a XPath selector. Care should be taken when
       * using an XPath selector with a {@link webdriver.WebElement} as WebDriver
       * will respect the context in the specified in the selector. For example,
       * given the selector `//div`, WebDriver will search from the document root
       * regardless of whether the locator was used with a WebElement.
       *
       * @param {string} xpath The XPath selector to use.
       * @return {!By} The new locator.
       * @see http://www.w3.org/TR/xpath/
       */
      static xpath(xpath: string): By;

      /** @override */
      toString(): string;
    }

    /**
     * Short-hand expressions for the primary element locator strategies.
     * For example the following two statements are equivalent:
     *
     *     var e1 = driver.findElement(webdriver.By.id('foo'));
     *     var e2 = driver.findElement({id: 'foo'});
     *
     * Care should be taken when using JavaScript minifiers (such as the
     * Closure compiler), as locator hashes will always be parsed using
     * the un-obfuscated properties listed.
     *
     * @typedef {(
     *     {className: string}|
     *     {css: string}|
     *     {id: string}|
     *     {js: string}|
     *     {linkText: string}|
     *     {name: string}|
     *     {partialLinkText: string}|
     *     {tagName: string}|
     *     {xpath: string})}
     */
    type ByHash = {className: string}|
        {css: string}|
        {id: string}|
        {js: string}|
        {linkText: string}|
        {name: string}|
        {partialLinkText: string}|
        {tagName: string}|
        {xpath: string};

    /**
     * Common webdriver capability keys.
     * @enum {string}
     */
    interface ICapability {

        /**
         * Indicates whether a driver should accept all SSL certs by default. This
         * capability only applies when requesting a new session. To query whether
         * a driver can handle insecure SSL certs, see
         * {@link webdriver.Capability.SECURE_SSL}.
         */
        ACCEPT_SSL_CERTS: string;


        /**
         * The browser name. Common browser names are defined in the
         * {@link webdriver.Browser} enum.
         */
        BROWSER_NAME: string;

        /**
         * Defines how elements should be scrolled into the viewport for interaction.
         * This capability will be set to zero (0) if elements are aligned with the
         * top of the viewport, or one (1) if aligned with the bottom. The default
         * behavior is to align with the top of the viewport.
         */
        ELEMENT_SCROLL_BEHAVIOR: string;

        /**
         * Whether the driver is capable of handling modal alerts (e.g. alert,
         * confirm, prompt). To define how a driver <i>should</i> handle alerts,
         * use {@link webdriver.Capability.UNEXPECTED_ALERT_BEHAVIOR}.
         */
        HANDLES_ALERTS: string;

        /**
         * Key for the logging driver logging preferences.
         */
        LOGGING_PREFS: string;

        /**
	     * Whether this session generates native events when simulating user input.
         */
        NATIVE_EVENTS: string;

        /**
         * Describes the platform the browser is running on. Will be one of
         * ANDROID, IOS, LINUX, MAC, UNIX, or WINDOWS. When <i>requesting</i> a
         * session, ANY may be used to indicate no platform preference (this is
         * semantically equivalent to omitting the platform capability).
         */
        PLATFORM: string;

        /**
         * Describes the proxy configuration to use for a new WebDriver session.
         */
        PROXY: string;

        /** Whether the driver supports changing the brower's orientation. */
        ROTATABLE: string;

        /**
         * Whether a driver is only capable of handling secure SSL certs. To request
         * that a driver accept insecure SSL certs by default, use
         * {@link webdriver.Capability.ACCEPT_SSL_CERTS}.
         */
        SECURE_SSL: string;

        /** Whether the driver supports manipulating the app cache. */
        SUPPORTS_APPLICATION_CACHE: string;

        /** Whether the driver supports locating elements with CSS selectors. */
        SUPPORTS_CSS_SELECTORS: string;

        /** Whether the browser supports JavaScript. */
        SUPPORTS_JAVASCRIPT: string;

        /** Whether the driver supports controlling the browser's location info. */
        SUPPORTS_LOCATION_CONTEXT: string;

        /** Whether the driver supports taking screenshots. */
        TAKES_SCREENSHOT: string;

        /**
         * Defines how the driver should handle unexpected alerts. The value should
         * be one of "accept", "dismiss", or "ignore.
         */
        UNEXPECTED_ALERT_BEHAVIOR: string;

        /** Defines the browser version. */
        VERSION: string;
    }

    var Capability: ICapability;

    class Capabilities {
        //region Constructors

        /**
         * @param {(webdriver.Capabilities|Object)=} opt_other Another set of
         *     capabilities to merge into this instance.
         * @constructor
         */
        constructor(opt_other?: Capabilities|Object);

        //endregion

        //region Methods

        /** @return {!Object} The JSON representation of this instance. */
        toJSON(): any;

        /**
         * Merges another set of capabilities into this instance. Any duplicates in
         * the provided set will override those already set on this instance.
         * @param {!(webdriver.Capabilities|Object)} other The capabilities to
         *     merge into this instance.
         * @return {!webdriver.Capabilities} A self reference.
         */
        merge(other: Capabilities|Object): Capabilities;

        /**
         * @param {string} key The capability to set.
         * @param {*} value The capability value.  Capability values must be JSON
         *     serializable. Pass {@code null} to unset the capability.
         * @return {!webdriver.Capabilities} A self reference.
         */
        set(key: string, value: any): Capabilities;

        /**
         * Sets the logging preferences. Preferences may be specified as a
         * {@link webdriver.logging.Preferences} instance, or a as a map of log-type to
         * log-level.
         * @param {!(webdriver.logging.Preferences|Object.<string, string>)} prefs The
         *     logging preferences.
         * @return {!webdriver.Capabilities} A self reference.
         */
        setLoggingPrefs(prefs: webdriver.logging.Preferences|Object): Capabilities;

        /**
         * Sets the proxy configuration for this instance.
         * @param {webdriver.ProxyConfig} proxy The desired proxy configuration.
         * @return {!webdriver.Capabilities} A self reference.
         */
        setProxy(proxy: ProxyConfig): Capabilities;


        /**
         * Sets whether native events should be used.
         * @param {boolean} enabled Whether to enable native events.
         * @return {!webdriver.Capabilities} A self reference.
         */
        setEnableNativeEvents(enabled: boolean): Capabilities;


        /**
         * Sets how elements should be scrolled into view for interaction.
         * @param {number} behavior The desired scroll behavior: either 0 to align with
         *     the top of the viewport or 1 to align with the bottom.
         * @return {!webdriver.Capabilities} A self reference.
         */
        setScrollBehavior(behavior: number): Capabilities;

        /**
         * Sets the default action to take with an unexpected alert before returning
         * an error.
         * @param {string} behavior The desired behavior; should be "accept", "dismiss",
         *     or "ignore". Defaults to "dismiss".
         * @return {!webdriver.Capabilities} A self reference.
         */
        setAlertBehavior(behavior: string): Capabilities;

        /**
         * @param {string} key The capability to return.
         * @return {*} The capability with the given key, or {@code null} if it has
         *     not been set.
         */
        get(key: string): any;

        /**
         * @param {string} key The capability to check.
         * @return {boolean} Whether the specified capability is set.
         */
        has(key: string): boolean;

        //endregion

        //region Static Methods

        /**
         * @return {!webdriver.Capabilities} A basic set of capabilities for Android.
         */
        static android(): Capabilities;

        /**
         * @return {!webdriver.Capabilities} A basic set of capabilities for Chrome.
         */
        static chrome(): Capabilities;

        /**
         * @return {!Capabilities} A basic set of capabilities for Microsoft Edge.
         */
        static edge(): Capabilities;

        /**
         * @return {!webdriver.Capabilities} A basic set of capabilities for Firefox.
         */
        static firefox(): Capabilities;

        /**
         * @return {!webdriver.Capabilities} A basic set of capabilities for
         *     Internet Explorer.
         */
        static ie(): Capabilities;

        /**
         * @return {!webdriver.Capabilities} A basic set of capabilities for iPad.
         */
        static ipad(): Capabilities;

        /**
         * @return {!webdriver.Capabilities} A basic set of capabilities for iPhone.
         */
        static iphone(): Capabilities;

        /**
         * @return {!webdriver.Capabilities} A basic set of capabilities for Opera.
         */
        static opera(): Capabilities;

        /**
         * @return {!webdriver.Capabilities} A basic set of capabilities for
         *     PhantomJS.
         */
        static phantomjs(): Capabilities;

        /**
         * @return {!webdriver.Capabilities} A basic set of capabilities for Safari.
         */
        static safari(): Capabilities;

        /**
         * @return {!webdriver.Capabilities} A basic set of capabilities for HTMLUnit.
         */
        static htmlunit(): Capabilities;

        /**
         * @return {!webdriver.Capabilities} A basic set of capabilities for HTMLUnit
         *                                   with enabled Javascript.
         */
        static htmlunitwithjs(): Capabilities;

        //endregion
    }

    /**
     * An enumeration of valid command string.
     */
    interface ICommandName {
        GET_SERVER_STATUS: string;

        NEW_SESSION: string;
        GET_SESSIONS: string;
        DESCRIBE_SESSION: string;

        CLOSE: string;
        QUIT: string;

        GET_CURRENT_URL: string;
        GET: string;
        GO_BACK: string;
        GO_FORWARD: string;
        REFRESH: string;

        ADD_COOKIE: string;
        GET_COOKIE: string;
        GET_ALL_COOKIES: string;
        DELETE_COOKIE: string;
        DELETE_ALL_COOKIES: string;

        GET_ACTIVE_ELEMENT: string;
        FIND_ELEMENT: string;
        FIND_ELEMENTS: string;
        FIND_CHILD_ELEMENT: string;
        FIND_CHILD_ELEMENTS: string;

        CLEAR_ELEMENT: string;
        CLICK_ELEMENT: string;
        SEND_KEYS_TO_ELEMENT: string;
        SUBMIT_ELEMENT: string;

        GET_CURRENT_WINDOW_HANDLE: string;
        GET_WINDOW_HANDLES: string;
        GET_WINDOW_POSITION: string;
        SET_WINDOW_POSITION: string;
        GET_WINDOW_SIZE: string;
        SET_WINDOW_SIZE: string;
        MAXIMIZE_WINDOW: string;

        SWITCH_TO_WINDOW: string;
        SWITCH_TO_FRAME: string;
        GET_PAGE_SOURCE: string;
        GET_TITLE: string;

        EXECUTE_SCRIPT: string;
        EXECUTE_ASYNC_SCRIPT: string;

        GET_ELEMENT_TEXT: string;
        GET_ELEMENT_TAG_NAME: string;
        IS_ELEMENT_SELECTED: string;
        IS_ELEMENT_ENABLED: string;
        IS_ELEMENT_DISPLAYED: string;
        GET_ELEMENT_LOCATION: string;
        GET_ELEMENT_LOCATION_IN_VIEW: string;
        GET_ELEMENT_SIZE: string;
        GET_ELEMENT_ATTRIBUTE: string;
        GET_ELEMENT_VALUE_OF_CSS_PROPERTY: string;
        ELEMENT_EQUALS: string;

        SCREENSHOT: string;
        IMPLICITLY_WAIT: string;
        SET_SCRIPT_TIMEOUT: string;
        SET_TIMEOUT: string;

        ACCEPT_ALERT: string;
        DISMISS_ALERT: string;
        GET_ALERT_TEXT: string;
        SET_ALERT_TEXT: string;

        EXECUTE_SQL: string;
        GET_LOCATION: string;
        SET_LOCATION: string;
        GET_APP_CACHE: string;
        GET_APP_CACHE_STATUS: string;
        CLEAR_APP_CACHE: string;
        IS_BROWSER_ONLINE: string;
        SET_BROWSER_ONLINE: string;

        GET_LOCAL_STORAGE_ITEM: string;
        GET_LOCAL_STORAGE_KEYS: string;
        SET_LOCAL_STORAGE_ITEM: string;
        REMOVE_LOCAL_STORAGE_ITEM: string;
        CLEAR_LOCAL_STORAGE: string;
        GET_LOCAL_STORAGE_SIZE: string;

        GET_SESSION_STORAGE_ITEM: string;
        GET_SESSION_STORAGE_KEYS: string;
        SET_SESSION_STORAGE_ITEM: string;
        REMOVE_SESSION_STORAGE_ITEM: string;
        CLEAR_SESSION_STORAGE: string;
        GET_SESSION_STORAGE_SIZE: string;

        SET_SCREEN_ORIENTATION: string;
        GET_SCREEN_ORIENTATION: string;

        // These belong to the Advanced user interactions - an element is
        // optional for these commands.
        CLICK: string;
        DOUBLE_CLICK: string;
        MOUSE_DOWN: string;
        MOUSE_UP: string;
        MOVE_TO: string;
        SEND_KEYS_TO_ACTIVE_ELEMENT: string;

        // These belong to the Advanced Touch API
        TOUCH_SINGLE_TAP: string;
        TOUCH_DOWN: string;
        TOUCH_UP: string;
        TOUCH_MOVE: string;
        TOUCH_SCROLL: string;
        TOUCH_DOUBLE_TAP: string;
        TOUCH_LONG_PRESS: string;
        TOUCH_FLICK: string;

        GET_AVAILABLE_LOG_TYPES: string;
        GET_LOG: string;
        GET_SESSION_LOGS: string;

        UPLOAD_FILE: string;
    }

    var CommandName: ICommandName;

    /**
     * Describes a command to be executed by the WebDriverJS framework.
     * @param {!webdriver.CommandName} name The name of this command.
     * @constructor
     */
    class Command {
        //region Constructors

        /**
         * @param {!webdriver.CommandName} name The name of this command.
         * @constructor
         */
        constructor(name: string);

        //endregion

        //region Methods

        /**
         * @return {!webdriver.CommandName} This command's name.
         */
        getName(): string;

        /**
         * Sets a parameter to send with this command.
         * @param {string} name The parameter name.
         * @param {*} value The parameter value.
         * @return {!webdriver.Command} A self reference.
         */
        setParameter(name: string, value: any): Command;

        /**
         * Sets the parameters for this command.
         * @param {!Object.<*>} parameters The command parameters.
         * @return {!webdriver.Command} A self reference.
         */
        setParameters(parameters: any): Command;

        /**
         * Returns a named command parameter.
         * @param {string} key The parameter key to look up.
         * @return {*} The parameter value, or undefined if it has not been set.
         */
        getParameter(key: string): any;

        /**
         * @return {!Object.<*>} The parameters to send with this command.
         */
        getParameters(): any;

        //endregion
    }

    /**
     * Handles the execution of WebDriver {@link Command commands}.
     * @interface
     */
    class Executor {
      /**
       * Executes the given {@code command}. If there is an error executing the
       * command, the provided callback will be invoked with the offending error.
       * Otherwise, the callback will be invoked with a null Error and non-null
       * response object.
       *
       * @param {!Command} command The command to execute.
       * @return {!promise.Promise<?>} A promise that will be fulfilled with
       *     the command result.
       */
      execute(command: Command): webdriver.promise.Promise<any>
    }

    /**
     * Wraps a promised {@link Executor}, ensuring no commands are executed until
     * the wrapped executor has been fully resolved.
     * @implements {Executor}
     */
    class DeferredExecutor {
      /**
       * @param {!promise.Promise<Executor>} delegate The promised delegate, which
       *     may be provided by any promise-like thenable object.
       */
      constructor(delegate: webdriver.promise.Promise<Executor>);
    }

    /**
     * Describes an event listener registered on an {@linkplain EventEmitter}.
     */
    class Listener {
      /**
       * @param {!Function} fn The acutal listener function.
       * @param {(Object|undefined)} scope The object in whose scope to invoke the
       *     listener.
       * @param {boolean} oneshot Whether this listener should only be used once.
       */
      constructor(fn: Function, scope: Object, oneshot: boolean);
    }

    /**
     * Object that can emit events for others to listen for. This is used instead
     * of Closure's event system because it is much more light weight. The API is
     * based on Node's EventEmitters.
     */
    class EventEmitter {
        //region Constructors

        /**
         * @constructor
         */
        constructor();

        //endregion

        //region Methods

        /**
         * Fires an event and calls all listeners.
         * @param {string} type The type of event to emit.
         * @param {...*} var_args Any arguments to pass to each listener.
         */
        emit(type: string, ...var_args: any[]): void;

        /**
         * Returns a mutable list of listeners for a specific type of event.
         * @param {string} type The type of event to retrieve the listeners for.
         * @return {!Set<!Listener>} The registered listeners for the given event
         *     type.
         */
        listeners(type: string): any;

        /**
         * Registers a listener.
         * @param {string} type The type of event to listen for.
         * @param {!Function} fn The function to invoke when the event is fired.
         * @param {Object=} opt_self The object in whose scope to invoke the listener.
         * @param {boolean=} opt_oneshot Whether the listener should b (e removed after
         *    the first event is fired.
         * @return {!EventEmitter} A self reference.
         * @private
         */
        addListener(type: string, fn: Function, opt_scope?:any, opt_oneshot?: boolean): EventEmitter;


        /**
         * Registers a one-time listener which will be called only the first time an
         * event is emitted, after which it will be removed.
         * @param {string} type The type of event to listen for.
         * @param {!Function} fn The function to invoke when the event is fired.
         * @param {Object=} opt_scope The object in whose scope to invoke the listener.
         * @return {!webdriver.EventEmitter} A self reference.
         */
        once(type: string, fn: any, opt_scope?: any): EventEmitter;

        /**
         * An alias for {@code #addListener()}.
         * @param {string} type The type of event to listen for.
         * @param {!Function} fn The function to invoke when the event is fired.
         * @param {Object=} opt_scope The object in whose scope to invoke the listener.
         * @return {!webdriver.EventEmitter} A self reference.
         */
        on(type: string, fn: Function, opt_scope?:any): EventEmitter;

        /**
         * Removes a previously registered event listener.
         * @param {string} type The type of event to unregister.
         * @param {!Function} listenerFn The handler function to remove.
         * @return {!webdriver.EventEmitter} A self reference.
         */
        removeListener(type: string, listenerFn: Function): EventEmitter;

        /**
         * Removes all listeners for a specific type of event. If no event is
         * specified, all listeners across all types will be removed.
         * @param {string=} opt_type The type of event to remove listeners from.
         * @return {!webdriver.EventEmitter} A self reference.
         */
        removeAllListeners(opt_type?: string): EventEmitter;

        //endregion
    }


    /**
     * Interface for navigating back and forth in the browser history.
     */
    class Navigation {
        //region Constructors

        /**
         * Interface for navigating back and forth in the browser history.
         *
         * This class should never be instantiated directly. Insead, obtain an instance
         * with
         *
         *    webdriver.navigate()
         *
         * @see WebDriver#navigate()
         */
        constructor(driver: WebDriver);

        //endregion

        //region Methods

        /**
         * Schedules a command to navigate to a new URL.
         * @param {string} url The URL to navigate to.
         * @return {!webdriver.promise.Promise.<void>} A promise that will be resolved
         *     when the URL has been loaded.
         */
        to(url: string): webdriver.promise.Promise<void>;

        /**
         * Schedules a command to move backwards in the browser history.
         * @return {!webdriver.promise.Promise.<void>} A promise that will be resolved
         *     when the navigation event has completed.
         */
        back(): webdriver.promise.Promise<void>;

        /**
         * Schedules a command to move forwards in the browser history.
         * @return {!webdriver.promise.Promise.<void>} A promise that will be resolved
         *     when the navigation event has completed.
         */
        forward(): webdriver.promise.Promise<void>;

        /**
         * Schedules a command to refresh the current page.
         * @return {!webdriver.promise.Promise.<void>} A promise that will be resolved
         *     when the navigation event has completed.
         */
        refresh(): webdriver.promise.Promise<void>;

        //endregion
    }

    interface IWebDriverOptionsCookie {
        name: string;
        value: string;
        path?: string;
        domain?: string;
        secure?: boolean;
        expiry?: number;
    }

    /**
     * Provides methods for managing browser and driver state.
     */
    class Options {
        //region Constructors

        /**
         * @param {!webdriver.WebDriver} driver The parent driver.
         * @constructor
         */
        constructor(driver: webdriver.WebDriver);

        //endregion

        //region Methods

        /**
         * Schedules a command to add a cookie.
         * @param {string} name The cookie name.
         * @param {string} value The cookie value.
         * @param {string=} opt_path The cookie path.
         * @param {string=} opt_domain The cookie domain.
         * @param {boolean=} opt_isSecure Whether the cookie is secure.
         * @param {(number|!Date)=} opt_expiry When the cookie expires. If specified
         *     as a number, should be in milliseconds since midnight,
         *     January 1, 1970 UTC.
         * @return {!promise.Promise<void>} A promise that will be resolved
         *     when the cookie has been added to the page.
         */
        addCookie(name: string, value: string, opt_path?: string, opt_domain?: string, opt_isSecure?: boolean, opt_expiry?: number|Date): webdriver.promise.Promise<void>;

        /**
         * Schedules a command to delete all cookies visible to the current page.
         * @return {!webdriver.promise.Promise} A promise that will be resolved when all
         *     cookies have been deleted.
         */
        deleteAllCookies(): webdriver.promise.Promise<void>;

        /**
         * Schedules a command to delete the cookie with the given name. This command is
         * a no-op if there is no cookie with the given name visible to the current
         * page.
         * @param {string} name The name of the cookie to delete.
         * @return {!webdriver.promise.Promise} A promise that will be resolved when the
         *     cookie has been deleted.
         */
        deleteCookie(name: string): webdriver.promise.Promise<void>;

        /**
         * Schedules a command to retrieve all cookies visible to the current page.
         * Each cookie will be returned as a JSON object as described by the WebDriver
         * wire protocol.
         * @return {!webdriver.promise.Promise} A promise that will be resolved with the
         *     cookies visible to the current page.
         * @see http://code.google.com/p/selenium/wiki/JsonWireProtocol#Cookie_JSON_Object
         */
        getCookies(): webdriver.promise.Promise<IWebDriverOptionsCookie[]>;

        /**
         * Schedules a command to retrieve the cookie with the given name. Returns null
         * if there is no such cookie. The cookie will be returned as a JSON object as
         * described by the WebDriver wire protocol.
         * @param {string} name The name of the cookie to retrieve.
         * @return {!webdriver.promise.Promise} A promise that will be resolved with the
         *     named cookie, or {@code null} if there is no such cookie.
         * @see http://code.google.com/p/selenium/wiki/JsonWireProtocol#Cookie_JSON_Object
         */
        getCookie(name: string): webdriver.promise.Promise<IWebDriverOptionsCookie>;

        /**
         * @return {!webdriver.WebDriver.Logs} The interface for managing driver
         *     logs.
         */
        logs(): webdriver.Logs;

        /**
         * @return {!webdriver.WebDriver.Timeouts} The interface for managing driver
         *     timeouts.
         */
        timeouts(): webdriver.Timeouts;

        /**
         * @return {!webdriver.WebDriver.Window} The interface for managing the
         *     current window.
         */
        window(): webdriver.Window;

        //endregion
    }

    /**
     * An interface for managing timeout behavior for WebDriver instances.
     */
    class Timeouts {
        //region Constructors

        /**
         * @param {!webdriver.WebDriver} driver The parent driver.
         * @constructor
         */
        constructor(driver: webdriver.WebDriver);

        //endregion

        //region Methods

        /**
         * Specifies the amount of time the driver should wait when searching for an
         * element if it is not immediately present.
         * <p/>
         * When searching for a single element, the driver should poll the page
         * until the element has been found, or this timeout expires before failing
         * with a {@code bot.ErrorCode.NO_SUCH_ELEMENT} error. When searching
         * for multiple elements, the driver should poll the page until at least one
         * element has been found or this timeout has expired.
         * <p/>
         * Setting the wait timeout to 0 (its default value), disables implicit
         * waiting.
         * <p/>
         * Increasing the implicit wait timeout should be used judiciously as it
         * will have an adverse effect on test run time, especially when used with
         * slower location strategies like XPath.
         *
         * @param {number} ms The amount of time to wait, in milliseconds.
         * @return {!webdriver.promise.Promise} A promise that will be resolved when the
         *     implicit wait timeout has been set.
         */
        implicitlyWait(ms: number): webdriver.promise.Promise<void>;

        /**
         * Sets the amount of time to wait, in milliseconds, for an asynchronous script
         * to finish execution before returning an error. If the timeout is less than or
         * equal to 0, the script will be allowed to run indefinitely.
         *
         * @param {number} ms The amount of time to wait, in milliseconds.
         * @return {!webdriver.promise.Promise} A promise that will be resolved when the
         *     script timeout has been set.
         */
        setScriptTimeout(ms: number): webdriver.promise.Promise<void>;

        /**
         * Sets the amount of time to wait for a page load to complete before returning
         * an error.  If the timeout is negative, page loads may be indefinite.
         * @param {number} ms The amount of time to wait, in milliseconds.
         * @return {!webdriver.promise.Promise} A promise that will be resolved when
         *     the timeout has been set.
         */
        pageLoadTimeout(ms: number): webdriver.promise.Promise<void>;

        //endregion
    }

    /**
     * An interface for managing the current window.
     */
    class Window {

        //region Constructors

        /**
         * @param {!webdriver.WebDriver} driver The parent driver.
         * @constructor
         */
        constructor(driver: webdriver.WebDriver);

        //endregion

        //region Methods

        /**
         * Retrieves the window's current position, relative to the top left corner of
         * the screen.
         * @return {!webdriver.promise.Promise} A promise that will be resolved with the
         *     window's position in the form of a {x:number, y:number} object literal.
         */
        getPosition(): webdriver.promise.Promise<ILocation>;

        /**
         * Repositions the current window.
         * @param {number} x The desired horizontal position, relative to the left side
         *     of the screen.
         * @param {number} y The desired vertical position, relative to the top of the
         *     of the screen.
         * @return {!webdriver.promise.Promise} A promise that will be resolved when the
         *     command has completed.
         */
        setPosition(x: number, y: number): webdriver.promise.Promise<void>;

        /**
         * Retrieves the window's current size.
         * @return {!webdriver.promise.Promise} A promise that will be resolved with the
         *     window's size in the form of a {width:number, height:number} object
         *     literal.
         */
        getSize(): webdriver.promise.Promise<ISize>;

        /**
         * Resizes the current window.
         * @param {number} width The desired window width.
         * @param {number} height The desired window height.
         * @return {!webdriver.promise.Promise} A promise that will be resolved when the
         *     command has completed.
         */
        setSize(width: number, height: number): webdriver.promise.Promise<void>;

        /**
         * Maximizes the current window.
         * @return {!webdriver.promise.Promise} A promise that will be resolved when the
         *     command has completed.
         */
        maximize(): webdriver.promise.Promise<void>;

        //endregion
    }

    /**
     * Interface for managing WebDriver log records.
     */
    class Logs {

        //region Constructors

        /**
         * @param {!webdriver.WebDriver} driver The parent driver.
         * @constructor
         */
        constructor(driver: webdriver.WebDriver);

        //endregion

        //region

        /**
         * Fetches available log entries for the given type.
         *
         * <p/>Note that log buffers are reset after each call, meaning that
         * available log entries correspond to those entries not yet returned for a
         * given log type. In practice, this means that this call will return the
         * available log entries since the last call, or from the start of the
         * session.
         *
         * @param {!webdriver.logging.Type} type The desired log type.
         * @return {!webdriver.promise.Promise.<!Array.<!webdriver.logging.Entry>>} A
         *   promise that will resolve to a list of log entries for the specified
         *   type.
         */
        get(type: webdriver.logging.Type): webdriver.promise.Promise<webdriver.logging.Entry[]>;

        /**
         * Retrieves the log types available to this driver.
         * @return {!webdriver.promise.Promise.<!Array.<!webdriver.logging.Type>>} A
         *     promise that will resolve to a list of available log types.
         */
        getAvailableLogTypes(): webdriver.promise.Promise<string[]>;

        //endregion
    }

    /**
     * An interface for changing the focus of the driver to another frame or window.
     */
    class TargetLocator {

        //region Constructors

        /**
         * @param {!webdriver.WebDriver} driver The parent driver.
         * @constructor
         */
        constructor(driver: webdriver.WebDriver);

        //endregion

        //region Methods

        /**
         * Schedules a command retrieve the {@code document.activeElement} element on
         * the current document, or {@code document.body} if activeElement is not
         * available.
         * @return {!webdriver.WebElement} The active element.
         */
        activeElement(): WebElementPromise;

        /**
         * Schedules a command to switch focus of all future commands to the first frame
         * on the page.
         * @return {!webdriver.promise.Promise} A promise that will be resolved when the
         *     driver has changed focus to the default content.
         */
        defaultContent(): webdriver.promise.Promise<void>;

        /**
         * Schedules a command to switch the focus of all future commands to another
         * frame on the page. The target frame may be specified as one of the
         * following:
         *
         * - A number that specifies a (zero-based) index into [window.frames](
         *   https://developer.mozilla.org/en-US/docs/Web/API/Window.frames).
         * - A {@link WebElement} reference, which correspond to a `frame` or `iframe`
         *   DOM element.
         * - The `null` value, to select the topmost frame on the page. Passing `null`
         *   is the same as calling {@link #defaultContent defaultContent()}.
         *
         * If the specified frame can not be found, the returned promise will be
         * rejected with a {@linkplain error.NoSuchFrameError}.
         *
         * @param {(number|WebElement|null)} id The frame locator.
         * @return {!promise.Promise<void>} A promise that will be resolved
         *     when the driver has changed focus to the specified frame.
         */
        frame(nameOrIndex: number|WebElement): webdriver.promise.Promise<void>;

        /**
         * Schedules a command to switch the focus of all future commands to another
         * window. Windows may be specified by their {@code window.name} attribute or
         * by its handle (as returned by {@link WebDriver#getWindowHandles}).
         *
         * If the specified window cannot be found, the returned promise will be
         * rejected with a {@linkplain error.NoSuchWindowError}.
         *
         * @param {string} nameOrHandle The name or window handle of the window to
         *     switch focus to.
         * @return {!promise.Promise<void>} A promise that will be resolved
         *     when the driver has changed focus to the specified window.
         */
        window(nameOrHandle: string): webdriver.promise.Promise<void>;

        /**
         * Schedules a command to change focus to the active modal dialog, such as
         * those opened by `window.alert()`, `window.confirm()`, and
         * `window.prompt()`. The returned promise will be rejected with a
         * {@linkplain error.NoSuchAlertError} if there are no open alerts.
         *
         * @return {!AlertPromise} The open alert.
         */
        alert(): AlertPromise;

        //endregion
    }

    /**
     * Used with {@link webdriver.WebElement#sendKeys WebElement#sendKeys} on file
     * input elements ({@code <input type="file">}) to detect when the entered key
     * sequence defines the path to a file.
     *
     * By default, {@linkplain webdriver.WebElement WebElement's} will enter all
     * key sequences exactly as entered. You may set a
     * {@linkplain webdriver.WebDriver#setFileDetector file detector} on the parent
     * WebDriver instance to define custom behavior for handling file elements. Of
     * particular note is the {@link selenium-webdriver/remote.FileDetector}, which
     * should be used when running against a remote
     * [Selenium Server](http://docs.seleniumhq.org/download/).
     */
    class FileDetector {
      /** @constructor */
      constructor();

      /**
       * Handles the file specified by the given path, preparing it for use with
       * the current browser. If the path does not refer to a valid file, it will
       * be returned unchanged, otherwisee a path suitable for use with the current
       * browser will be returned.
       *
       * This default implementation is a no-op. Subtypes may override this
       * function for custom tailored file handling.
       *
       * @param {!webdriver.WebDriver} driver The driver for the current browser.
       * @param {string} path The path to process.
       * @return {!webdriver.promise.Promise<string>} A promise for the processed
       *     file path.
       * @package
       */
      handleFile(driver: webdriver.WebDriver, path: string): webdriver.promise.Promise<string>;
    }

    /**
     * Creates a new WebDriver client, which provides control over a browser.
     *
     * Every WebDriver command returns a {@code webdriver.promise.Promise} that
     * represents the result of that command. Callbacks may be registered on this
     * object to manipulate the command result or catch an expected error. Any
     * commands scheduled with a callback are considered sub-commands and will
     * execute before the next command in the current frame. For example:
     *
     *   var message = [];
     *   driver.call(message.push, message, 'a').then(function() {
     *     driver.call(message.push, message, 'b');
     *   });
     *   driver.call(message.push, message, 'c');
     *   driver.call(function() {
     *     alert('message is abc? ' + (message.join('') == 'abc'));
     *   });
     *
     */
    class WebDriver {
        //region Constructors

        /**
         * @param {!(Session|promise.Promise<!Session>)} session Either a
         *     known session or a promise that will be resolved to a session.
         * @param {!command.Executor} executor The executor to use when sending
         *     commands to the browser.
         * @param {promise.ControlFlow=} opt_flow The flow to
         *     schedule commands through. Defaults to the active flow object.
         */
         constructor(session: Session|webdriver.promise.Promise<Session>, executor: Executor, opt_flow?: webdriver.promise.ControlFlow);

        //endregion

        //region StaticMethods

        /**
         * Creates a new WebDriver client for an existing session.
         * @param {!command.Executor} executor Command executor to use when querying
         *     for session details.
         * @param {string} sessionId ID of the session to attach to.
         * @param {promise.ControlFlow=} opt_flow The control flow all
         *     driver commands should execute under. Defaults to the
         *     {@link promise.controlFlow() currently active}  control flow.
         * @return {!WebDriver} A new client for the specified session.
         */
        static attachToSession(executor: Executor, sessionId: string, opt_flow?: webdriver.promise.ControlFlow): WebDriver;

        /**
         * Creates a new WebDriver session.
         * @param {!command.Executor} executor The executor to create the new session
         *     with.
         * @param {!./capabilities.Capabilities} desiredCapabilities The desired
         *     capabilities for the new session.
         * @param {promise.ControlFlow=} opt_flow The control flow all driver
         *     commands should execute under, including the initial session creation.
         *     Defaults to the {@link promise.controlFlow() currently active}
         *     control flow.
         * @return {!WebDriver} The driver for the newly created session.
         */
        static createSession(executor: Executor, desiredCapabilities: Capabilities, opt_flow?: webdriver.promise.ControlFlow): WebDriver;

        //endregion

        //region Methods

        /**
         * @return {!webdriver.promise.ControlFlow} The control flow used by this
         *     instance.
         */
        controlFlow(): webdriver.promise.ControlFlow;

        /**
         * Schedules a {@link command.Command} to be executed by this driver's
         * {@link command.Executor}.
         *
         * @param {!command.Command} command The command to schedule.
         * @param {string} description A description of the command for debugging.
         * @return {!promise.Promise<T>} A promise that will be resolved
         *     with the command result.
         * @template T
         */
        schedule<T>(command: Command, description: string): webdriver.promise.Promise<T>;


        /**
         * Sets the {@linkplain input.FileDetector file detector} that should be
         * used with this instance.
         * @param {input.FileDetector} detector The detector to use or {@code null}.
         */
        setFileDetector(detector: FileDetector): void;


        /**
         * @return {!webdriver.promise.Promise.<!webdriver.Session>} A promise for this
         *     client's session.
         */
        getSession(): webdriver.promise.Promise<Session>;


        /**
         * @return {!webdriver.promise.Promise.<!webdriver.Capabilities>} A promise
         *     that will resolve with the this instance's capabilities.
         */
        getCapabilities(): webdriver.promise.Promise<Capabilities>;


        /**
         * Schedules a command to quit the current session. After calling quit, this
         * instance will be invalidated and may no longer be used to issue commands
         * against the browser.
         * @return {!webdriver.promise.Promise.<void>} A promise that will be resolved
         *     when the command has completed.
         */
        quit(): webdriver.promise.Promise<void>;

        /**
         * Creates a new action sequence using this driver. The sequence will not be
         * scheduled for execution until {@link actions.ActionSequence#perform} is
         * called. Example:
         *
         *     driver.actions().
         *         mouseDown(element1).
         *         mouseMove(element2).
         *         mouseUp().
         *         perform();
         *
         * @return {!actions.ActionSequence} A new action sequence for this instance.
         */
        actions(): ActionSequence;


        /**
         * Creates a new touch sequence using this driver. The sequence will not be
         * scheduled for execution until {@link actions.TouchSequence#perform} is
         * called. Example:
         *
         *     driver.touchActions().
         *         tap(element1).
         *         doubleTap(element2).
         *         perform();
         *
         * @return {!actions.TouchSequence} A new touch sequence for this instance.
         */
        touchActions(): TouchSequence;


        /**
         * Schedules a command to execute JavaScript in the context of the currently
         * selected frame or window. The script fragment will be executed as the body
         * of an anonymous function. If the script is provided as a function object,
         * that function will be converted to a string for injection into the target
         * window.
         *
         * Any arguments provided in addition to the script will be included as script
         * arguments and may be referenced using the {@code arguments} object.
         * Arguments may be a boolean, number, string, or {@code webdriver.WebElement}.
         * Arrays and objects may also be used as script arguments as long as each item
         * adheres to the types previously mentioned.
         *
         * The script may refer to any variables accessible from the current window.
         * Furthermore, the script will execute in the window's context, thus
         * {@code document} may be used to refer to the current document. Any local
         * variables will not be available once the script has finished executing,
         * though global variables will persist.
         *
         * If the script has a return value (i.e. if the script contains a return
         * statement), then the following steps will be taken for resolving this
         * functions return value:
         *
         * - For a HTML element, the value will resolve to a
         *     {@link webdriver.WebElement}
         * - Null and undefined return values will resolve to null</li>
         * - Booleans, numbers, and strings will resolve as is</li>
         * - Functions will resolve to their string representation</li>
         * - For arrays and objects, each member item will be converted according to
         *     the rules above
         *
         * @param {!(string|Function)} script The script to execute.
         * @param {...*} var_args The arguments to pass to the script.
         * @return {!webdriver.promise.Promise.<T>} A promise that will resolve to the
         *    scripts return value.
         * @template T
         */
        executeScript<T>(script: string|Function, ...var_args: any[]): webdriver.promise.Promise<T>;

        /**
         * Schedules a command to execute asynchronous JavaScript in the context of the
         * currently selected frame or window. The script fragment will be executed as
         * the body of an anonymous function. If the script is provided as a function
         * object, that function will be converted to a string for injection into the
         * target window.
         *
         * Any arguments provided in addition to the script will be included as script
         * arguments and may be referenced using the {@code arguments} object.
         * Arguments may be a boolean, number, string, or {@code webdriver.WebElement}.
         * Arrays and objects may also be used as script arguments as long as each item
         * adheres to the types previously mentioned.
         *
         * Unlike executing synchronous JavaScript with {@link #executeScript},
         * scripts executed with this function must explicitly signal they are finished
         * by invoking the provided callback. This callback will always be injected
         * into the executed function as the last argument, and thus may be referenced
         * with {@code arguments[arguments.length - 1]}. The following steps will be
         * taken for resolving this functions return value against the first argument
         * to the script's callback function:
         *
         * - For a HTML element, the value will resolve to a
         *     {@link webdriver.WebElement}
         * - Null and undefined return values will resolve to null
         * - Booleans, numbers, and strings will resolve as is
         * - Functions will resolve to their string representation
         * - For arrays and objects, each member item will be converted according to
         *     the rules above
         *
         * __Example #1:__ Performing a sleep that is synchronized with the currently
         * selected window:
         *
         *     var start = new Date().getTime();
         *     driver.executeAsyncScript(
         *         'window.setTimeout(arguments[arguments.length - 1], 500);').
         *         then(function() {
         *           console.log(
         *               'Elapsed time: ' + (new Date().getTime() - start) + ' ms');
         *         });
         *
         * __Example #2:__ Synchronizing a test with an AJAX application:
         *
         *     var button = driver.findElement(By.id('compose-button'));
         *     button.click();
         *     driver.executeAsyncScript(
         *         'var callback = arguments[arguments.length - 1];' +
         *         'mailClient.getComposeWindowWidget().onload(callback);');
         *     driver.switchTo().frame('composeWidget');
         *     driver.findElement(By.id('to')).sendKeys('dog@example.com');
         *
         * __Example #3:__ Injecting a XMLHttpRequest and waiting for the result. In
         * this example, the inject script is specified with a function literal. When
         * using this format, the function is converted to a string for injection, so it
         * should not reference any symbols not defined in the scope of the page under
         * test.
         *
         *     driver.executeAsyncScript(function() {
         *       var callback = arguments[arguments.length - 1];
         *       var xhr = new XMLHttpRequest();
         *       xhr.open("GET", "/resource/data.json", true);
         *       xhr.onreadystatechange = function() {
         *         if (xhr.readyState == 4) {
         *           callback(xhr.responseText);
         *         }
         *       }
         *       xhr.send('');
         *     }).then(function(str) {
         *       console.log(JSON.parse(str)['food']);
         *     });
         *
         * @param {!(string|Function)} script The script to execute.
         * @param {...*} var_args The arguments to pass to the script.
         * @return {!webdriver.promise.Promise.<T>} A promise that will resolve to the
         *    scripts return value.
         * @template T
         */
        executeAsyncScript<T>(script: string|Function, ...var_args: any[]): webdriver.promise.Promise<T>;

        /**
         * Schedules a command to execute a custom function.
         * @param {function(...): (T|webdriver.promise.Promise.<T>)} fn The function to
         *     execute.
         * @param {Object=} opt_scope The object in whose scope to execute the function.
         * @param {...*} var_args Any arguments to pass to the function.
         * @return {!webdriver.promise.Promise.<T>} A promise that will be resolved'
         *     with the function's result.
         * @template T
         */
        call<T>(fn: (...var_args: any[])=>(T|webdriver.promise.Promise<T>), opt_scope?: any, ...var_args: any[]): webdriver.promise.Promise<T>;

        /**
         * Schedules a command to wait for a condition to hold. The condition may be
         * specified by a {@link webdriver.until.Condition}, as a custom function, or
         * as a {@link webdriver.promise.Promise}.
         *
         * For a {@link webdriver.until.Condition} or function, the wait will repeatedly
         * evaluate the condition until it returns a truthy value. If any errors occur
         * while evaluating the condition, they will be allowed to propagate. In the
         * event a condition returns a {@link webdriver.promise.Promise promise}, the
         * polling loop will wait for it to be resolved and use the resolved value for
         * whether the condition has been satisified. Note the resolution time for
         * a promise is factored into whether a wait has timed out.
         *
         * *Example:* waiting up to 10 seconds for an element to be present and visible
         * on the page.
         *
         *     var button = driver.wait(until.elementLocated(By.id('foo'), 10000);
         *     button.click();
         *
         * This function may also be used to block the command flow on the resolution
         * of a {@link webdriver.promise.Promise promise}. When given a promise, the
         * command will simply wait for its resolution before completing. A timeout may
         * be provided to fail the command if the promise does not resolve before the
         * timeout expires.
         *
         * *Example:* Suppose you have a function, `startTestServer`, that returns a
         * promise for when a server is ready for requests. You can block a `WebDriver`
         * client on this promise with:
         *
         *     var started = startTestServer();
         *     driver.wait(started, 5 * 1000, 'Server should start within 5 seconds');
         *     driver.get(getServerUrl());
         *
         * @param {!(webdriver.promise.Promise<T>|
         *           webdriver.until.Condition<T>|
         *           function(!webdriver.WebDriver): T)} condition The condition to
         *     wait on, defined as a promise, condition object, or  a function to
         *     evaluate as a condition.
         * @param {number=} opt_timeout How long to wait for the condition to be true.
         * @param {string=} opt_message An optional message to use if the wait times
         *     out.
         * @return {!webdriver.promise.Promise<T>} A promise that will be fulfilled
         *     with the first truthy value returned by the condition function, or
         *     rejected if the condition times out.
         * @template T
         */
        wait<T>(condition: webdriver.promise.Promise<T>|webdriver.until.Condition<T>|((driver: WebDriver)=>T), timeout?: number, opt_message?: string): webdriver.promise.Promise<T>;

        /**
         * Schedules a command to make the driver sleep for the given amount of time.
         * @param {number} ms The amount of time, in milliseconds, to sleep.
         * @return {!webdriver.promise.Promise.<void>} A promise that will be resolved
         *     when the sleep has finished.
         */
        sleep(ms: number): webdriver.promise.Promise<void>;

        /**
         * Schedules a command to retrieve they current window handle.
         * @return {!webdriver.promise.Promise.<string>} A promise that will be
         *     resolved with the current window handle.
         */
        getWindowHandle(): webdriver.promise.Promise<string>;

        /**
         * Schedules a command to retrieve the current list of available window handles.
         * @return {!webdriver.promise.Promise.<!Array.<string>>} A promise that will
         *     be resolved with an array of window handles.
         */
        getAllWindowHandles(): webdriver.promise.Promise<string[]>;

        /**
         * Schedules a command to retrieve the current page's source. The page source
         * returned is a representation of the underlying DOM: do not expect it to be
         * formatted or escaped in the same way as the response sent from the web
         * server.
         * @return {!webdriver.promise.Promise.<string>} A promise that will be
         *     resolved with the current page source.
         */
        getPageSource(): webdriver.promise.Promise<string>;

        /**
         * Schedules a command to close the current window.
         * @return {!webdriver.promise.Promise.<void>} A promise that will be resolved
         *     when this command has completed.
         */
        close(): webdriver.promise.Promise<void>;

        /**
         * Schedules a command to navigate to the given URL.
         * @param {string} url The fully qualified URL to open.
         * @return {!webdriver.promise.Promise.<void>} A promise that will be resolved
         *     when the document has finished loading.
         */
        get(url: string): webdriver.promise.Promise<void>;

        /**
         * Schedules a command to retrieve the URL of the current page.
         * @return {!webdriver.promise.Promise.<string>} A promise that will be
         *     resolved with the current URL.
         */
        getCurrentUrl(): webdriver.promise.Promise<string>;

        /**
         * Schedules a command to retrieve the current page's title.
         * @return {!webdriver.promise.Promise.<string>} A promise that will be
         *     resolved with the current page's title.
         */
        getTitle(): webdriver.promise.Promise<string>;

        /**
         * Schedule a command to find an element on the page. If the element cannot be
         * found, a {@link bot.ErrorCode.NO_SUCH_ELEMENT} result will be returned
         * by the driver. Unlike other commands, this error cannot be suppressed. In
         * other words, scheduling a command to find an element doubles as an assert
         * that the element is present on the page. To test whether an element is
         * present on the page, use {@link #isElementPresent} instead.
         *
         * The search criteria for an element may be defined using one of the
         * factories in the {@link webdriver.By} namespace, or as a short-hand
         * {@link webdriver.By.Hash} object. For example, the following two statements
         * are equivalent:
         *
         *     var e1 = driver.findElement(By.id('foo'));
         *     var e2 = driver.findElement({id:'foo'});
         *
         * You may also provide a custom locator function, which takes as input this
         * instance and returns a {@link WebElement}, or a promise that will resolve
         * to a WebElement. If the returned promise resolves to an array of
         * WebElements, WebDriver will use the first element. For example, to find the
         * first visible link on a page, you could write:
         *
         *     var link = driver.findElement(firstVisibleLink);
         *
         *     function firstVisibleLink(driver) {
         *       var links = driver.findElements(By.tagName('a'));
         *       return promise.filter(links, function(link) {
         *         return link.isDisplayed();
         *       });
         *     }
         *
         * @param {!(by.By|Function)} locator The locator to use.
         * @return {!WebElementPromise} A WebElement that can be used to issue
         *     commands against the located element. If the element is not found, the
         *     element will be invalidated and all scheduled commands aborted.
         */
        findElement(locator: By|Function): WebElementPromise;

        /**
         * Schedules a command to test if an element is present on the page.
         *
         * If given a DOM element, this function will check if it belongs to the
         * document the driver is currently focused on. Otherwise, the function will
         * test if at least one element can be found with the given search criteria.
         *
         * @param {!(by.By|Function)} locator The locator to use.
         * @return {!promise.Promise<boolean>} A promise that will resolve
         *     with whether the element is present on the page.
         * @deprecated This method will be removed in Selenium 3.0 for consistency
         *     with the other Selenium language bindings. This method is equivalent
         *     to
         *
         *      driver.findElements(locator).then(e => !!e.length);
         */
        isElementPresent(locatorOrElement: By|Function): webdriver.promise.Promise<boolean>;

        /**
         * Schedule a command to search for multiple elements on the page.
         *
         * @param {!(by.By|Function)} locator The locator to use.
         * @return {!promise.Promise.<!Array.<!WebElement>>} A
         *     promise that will resolve to an array of WebElements.
         */
        findElements(locator: By|Function): webdriver.promise.Promise<WebElement[]>;

        /**
         * Schedule a command to take a screenshot. The driver makes a best effort to
         * return a screenshot of the following, in order of preference:
         *
         * 1. Entire page
         * 2. Current window
         * 3. Visible portion of the current frame
         * 4. The entire display containing the browser
         *
         * @return {!promise.Promise<string>} A promise that will be
         *     resolved to the screenshot as a base-64 encoded PNG.
         */
        takeScreenshot(): webdriver.promise.Promise<string>;

        /**
         * @return {!webdriver.WebDriver.Options} The options interface for this
         *     instance.
         */
        manage(): webdriver.Options;

        /**
         * @return {!webdriver.WebDriver.Navigation} The navigation interface for this
         *     instance.
         */
        navigate(): Navigation;

        /**
         * @return {!webdriver.WebDriver.TargetLocator} The target locator interface for
         *     this instance.
         */
        switchTo(): webdriver.TargetLocator;

        //endregion
    }

    interface IWebElementId {
        [ELEMENT:string]: string;
    }

    /**
     * Represents a DOM element. WebElements can be found by searching from the
     * document root using a {@code webdriver.WebDriver} instance, or by searching
     * under another {@code webdriver.WebElement}:
     * <pre><code>
     *   driver.get('http://www.google.com');
     *   var searchForm = driver.findElement(By.tagName('form'));
     *   var searchBox = searchForm.findElement(By.name('q'));
     *   searchBox.sendKeys('webdriver');
     * </code></pre>
     *
     * The WebElement is implemented as a promise for compatibility with the promise
     * API. It will always resolve itself when its internal state has been fully
     * resolved and commands may be issued against the element. This can be used to
     * catch errors when an element cannot be located on the page:
     * <pre><code>
     *   driver.findElement(By.id('not-there')).then(function(element) {
     *     alert('Found an element that was not expected to be there!');
     *   }, function(error) {
     *     alert('The element was not found, as expected');
     *   });
     * </code></pre>
     */
    interface IWebElement {
        //region Methods

        /**
         * Schedules a command to click on this element.
         * @return {!webdriver.promise.Promise} A promise that will be resolved when
         *     the click command has completed.
         */
        click(): webdriver.promise.Promise<void>;

        /**
         * Schedules a command to type a sequence on the DOM element represented by this
         * instance.
         * <p/>
         * Modifier keys (SHIFT, CONTROL, ALT, META) are stateful; once a modifier is
         * processed in the keysequence, that key state is toggled until one of the
         * following occurs:
         * <ul>
         * <li>The modifier key is encountered again in the sequence. At this point the
         * state of the key is toggled (along with the appropriate keyup/down events).
         * </li>
         * <li>The {@code webdriver.Key.NULL} key is encountered in the sequence. When
         * this key is encountered, all modifier keys current in the down state are
         * released (with accompanying keyup events). The NULL key can be used to
         * simulate common keyboard shortcuts:
         * <code>
         *     element.sendKeys("text was",
         *                      webdriver.Key.CONTROL, "a", webdriver.Key.NULL,
         *                      "now text is");
         *     // Alternatively:
         *     element.sendKeys("text was",
         *                      webdriver.Key.chord(webdriver.Key.CONTROL, "a"),
         *                      "now text is");
         * </code></li>
         * <li>The end of the keysequence is encountered. When there are no more keys
         * to type, all depressed modifier keys are released (with accompanying keyup
         * events).
         * </li>
         * </ul>
         * <strong>Note:</strong> On browsers where native keyboard events are not yet
         * supported (e.g. Firefox on OS X), key events will be synthesized. Special
         * punctionation keys will be synthesized according to a standard QWERTY en-us
         * keyboard layout.
         *
         * @param {...string} var_args The sequence of keys to
         *     type. All arguments will be joined into a single sequence (var_args is
         *     permitted for convenience).
         * @return {!webdriver.promise.Promise} A promise that will be resolved when all
         *     keys have been typed.
         */
        sendKeys(...var_args: string[]): webdriver.promise.Promise<void>;

        /**
         * Schedules a command to query for the tag/node name of this element.
         * @return {!webdriver.promise.Promise} A promise that will be resolved with the
         *     element's tag name.
         */
        getTagName(): webdriver.promise.Promise<string>;

        /**
         * Schedules a command to query for the computed style of the element
         * represented by this instance. If the element inherits the named style from
         * its parent, the parent will be queried for its value.  Where possible, color
         * values will be converted to their hex representation (e.g. #00ff00 instead of
         * rgb(0, 255, 0)).
         * <p/>
         * <em>Warning:</em> the value returned will be as the browser interprets it, so
         * it may be tricky to form a proper assertion.
         *
         * @param {string} cssStyleProperty The name of the CSS style property to look
         *     up.
         * @return {!webdriver.promise.Promise} A promise that will be resolved with the
         *     requested CSS value.
         */
        getCssValue(cssStyleProperty: string): webdriver.promise.Promise<string>;

        /**
         * Schedules a command to query for the value of the given attribute of the
         * element. Will return the current value even if it has been modified after the
         * page has been loaded. More exactly, this method will return the value of the
         * given attribute, unless that attribute is not present, in which case the
         * value of the property with the same name is returned. If neither value is
         * set, null is returned. The "style" attribute is converted as best can be to a
         * text representation with a trailing semi-colon. The following are deemed to
         * be "boolean" attributes and will be returned as thus:
         *
         * <p>async, autofocus, autoplay, checked, compact, complete, controls, declare,
         * defaultchecked, defaultselected, defer, disabled, draggable, ended,
         * formnovalidate, hidden, indeterminate, iscontenteditable, ismap, itemscope,
         * loop, multiple, muted, nohref, noresize, noshade, novalidate, nowrap, open,
         * paused, pubdate, readonly, required, reversed, scoped, seamless, seeking,
         * selected, spellcheck, truespeed, willvalidate
         *
         * <p>Finally, the following commonly mis-capitalized attribute/property names
         * are evaluated as expected:
         * <ul>
         *   <li>"class"
         *   <li>"readonly"
         * </ul>
         * @param {string} attributeName The name of the attribute to query.
         * @return {!webdriver.promise.Promise} A promise that will be resolved with the
         *     attribute's value.
         */
        getAttribute(attributeName: string): webdriver.promise.Promise<string>;

        /**
         * Get the visible (i.e. not hidden by CSS) innerText of this element, including
         * sub-elements, without any leading or trailing whitespace.
         * @return {!webdriver.promise.Promise} A promise that will be resolved with the
         *     element's visible text.
         */
        getText(): webdriver.promise.Promise<string>;

        /**
         * Schedules a command to compute the size of this element's bounding box, in
         * pixels.
         * @return {!webdriver.promise.Promise} A promise that will be resolved with the
         *     element's size as a {@code {width:number, height:number}} object.
         */
        getSize(): webdriver.promise.Promise<ISize>;

        /**
         * Schedules a command to compute the location of this element in page space.
         * @return {!webdriver.promise.Promise} A promise that will be resolved to the
         *     element's location as a {@code {x:number, y:number}} object.
         */
        getLocation(): webdriver.promise.Promise<ILocation>;

        /**
         * Schedules a command to query whether the DOM element represented by this
         * instance is enabled, as dicted by the {@code disabled} attribute.
         * @return {!webdriver.promise.Promise} A promise that will be resolved with
         *     whether this element is currently enabled.
         */
        isEnabled(): webdriver.promise.Promise<boolean>;

        /**
         * Schedules a command to query whether this element is selected.
         * @return {!webdriver.promise.Promise} A promise that will be resolved with
         *     whether this element is currently selected.
         */
        isSelected(): webdriver.promise.Promise<boolean>;

        /**
         * Schedules a command to submit the form containing this element (or this
         * element if it is a FORM element). This command is a no-op if the element is
         * not contained in a form.
         * @return {!webdriver.promise.Promise} A promise that will be resolved when
         *     the form has been submitted.
         */
        submit(): webdriver.promise.Promise<void>;

        /**
         * Schedules a command to clear the {@code value} of this element. This command
         * has no effect if the underlying DOM element is neither a text INPUT element
         * nor a TEXTAREA element.
         * @return {!webdriver.promise.Promise} A promise that will be resolved when
         *     the element has been cleared.
         */
        clear(): webdriver.promise.Promise<void>;

        /**
         * Schedules a command to test whether this element is currently displayed.
         * @return {!webdriver.promise.Promise} A promise that will be resolved with
         *     whether this element is currently visible on the page.
         */
        isDisplayed(): webdriver.promise.Promise<boolean>;

        /**
         * Schedules a command to retrieve the outer HTML of this element.
         * @return {!webdriver.promise.Promise} A promise that will be resolved with
         *     the element's outer HTML.
         */
        getOuterHtml(): webdriver.promise.Promise<string>;

        /**
         * @return {!webdriver.promise.Promise.<webdriver.WebElement.Id>} A promise
         *     that resolves to this element's JSON representation as defined by the
         *     WebDriver wire protocol.
         * @see http://code.google.com/p/selenium/wiki/JsonWireProtocol
         */
        getId(): webdriver.promise.Promise<IWebElementId>;

        /**
         * Schedules a command to retrieve the inner HTML of this element.
         * @return {!webdriver.promise.Promise} A promise that will be resolved with the
         *     element's inner HTML.
         */
        getInnerHtml(): webdriver.promise.Promise<string>;

        //endregion
    }

    interface IWebElementFinders {
        /**
         * Schedule a command to find a descendant of this element. If the element
         * cannot be found, a {@code bot.ErrorCode.NO_SUCH_ELEMENT} result will
         * be returned by the driver. Unlike other commands, this error cannot be
         * suppressed. In other words, scheduling a command to find an element doubles
         * as an assert that the element is present on the page. To test whether an
         * element is present on the page, use {@code #isElementPresent} instead.
         *
         * <p>The search criteria for an element may be defined using one of the
         * factories in the {@link webdriver.By} namespace, or as a short-hand
         * {@link webdriver.By.Hash} object. For example, the following two statements
         * are equivalent:
         * <code><pre>
         * var e1 = element.findElement(By.id('foo'));
         * var e2 = element.findElement({id:'foo'});
         * </pre></code>
         *
         * <p>You may also provide a custom locator function, which takes as input
         * this WebDriver instance and returns a {@link webdriver.WebElement}, or a
         * promise that will resolve to a WebElement. For example, to find the first
         * visible link on a page, you could write:
         * <code><pre>
         * var link = element.findElement(firstVisibleLink);
         *
         * function firstVisibleLink(element) {
         *   var links = element.findElements(By.tagName('a'));
         *   return webdriver.promise.filter(links, function(link) {
         *     return links.isDisplayed();
         *   }).then(function(visibleLinks) {
         *     return visibleLinks[0];
         *   });
         * }
         * </pre></code>
         *
         * @param {!(webdriver.Locator|webdriver.By.Hash|Function)} locator The
         *     locator strategy to use when searching for the element.
         * @return {!webdriver.WebElement} A WebElement that can be used to issue
         *     commands against the located element. If the element is not found, the
         *     element will be invalidated and all scheduled commands aborted.
         */
        findElement(locator: By|Function): WebElementPromise;

        /**
         * Schedules a command to test if there is at least one descendant of this
         * element that matches the given search criteria.
         *
         * @param {!(webdriver.Locator|webdriver.By.Hash|Function)} locator The
         *     locator strategy to use when searching for the element.
         * @return {!webdriver.promise.Promise.<boolean>} A promise that will be
         *     resolved with whether an element could be located on the page.
         */
        isElementPresent(locator: By|Function): webdriver.promise.Promise<boolean>;

        /**
         * Schedules a command to find all of the descendants of this element that
         * match the given search criteria.
         *
         * @param {!(webdriver.Locator|webdriver.By.Hash|Function)} locator The
         *     locator strategy to use when searching for the elements.
         * @return {!webdriver.promise.Promise.<!Array.<!webdriver.WebElement>>} A
         *     promise that will resolve to an array of WebElements.
         */
        findElements(locator: By|Function): webdriver.promise.Promise<WebElement[]>;
    }

    /**
     * Defines an object that can be asynchronously serialized to its WebDriver
     * wire representation.
     *
     * @constructor
     * @template T
     */
    interface Serializable<T> {
        /**
         * Returns either this instance's serialized represention, if immediately
         * available, or a promise for its serialized representation. This function is
         * conceptually equivalent to objects that have a {@code toJSON()} property,
         * except the serialize() result may be a promise or an object containing a
         * promise (which are not directly JSON friendly).
         *
         * @return {!(T|IThenable.<!T>)} This instance's serialized wire format.
         */
        serialize(): T|webdriver.promise.IThenable<T>;
    }

    /**
     * Represents a DOM element. WebElements can be found by searching from the
     * document root using a {@link webdriver.WebDriver} instance, or by searching
     * under another WebElement:
     *
     *     driver.get('http://www.google.com');
     *     var searchForm = driver.findElement(By.tagName('form'));
     *     var searchBox = searchForm.findElement(By.name('q'));
     *     searchBox.sendKeys('webdriver');
     *
     * The WebElement is implemented as a promise for compatibility with the promise
     * API. It will always resolve itself when its internal state has been fully
     * resolved and commands may be issued against the element. This can be used to
     * catch errors when an element cannot be located on the page:
     *
     *     driver.findElement(By.id('not-there')).then(function(element) {
     *       alert('Found an element that was not expected to be there!');
     *     }, function(error) {
     *       alert('The element was not found, as expected');
     *     });
     *
     * @extends {webdriver.Serializable.<webdriver.WebElement.Id>}
     */
    class WebElement implements Serializable<IWebElementId> {
        /**
         * @param {!WebDriver} driver the parent WebDriver instance for this element.
         * @param {(!IThenable<string>|string)} id The server-assigned opaque ID for
         *     the underlying DOM element.
         */
        constructor(driver: webdriver.WebDriver, id: webdriver.promise.Promise<string>|string);

        /**
         * @param {string} id The raw ID.
         * @param {boolean=} opt_noLegacy Whether to exclude the legacy element key.
         * @return {!Object} The element ID for use with WebDriver's wire protocol.
         */
        static buildId(id: string, opt_noLegacy?: boolean): Object;

        /**
         * Extracts the encoded WebElement ID from the object.
         *
         * @param {?} obj The object to extract the ID from.
         * @return {string} the extracted ID.
         * @throws {TypeError} if the object is not a valid encoded ID.
         */
        static extractId(obj: IWebElementId): string;

        /**
         * @param {?} obj the object to test.
         * @return {boolean} whether the object is a valid encoded WebElement ID.
         */
        static isId(obj: IWebElementId): boolean;

        /**
         * Compares two WebElements for equality.
         *
         * @param {!WebElement} a A WebElement.
         * @param {!WebElement} b A WebElement.
         * @return {!promise.Promise<boolean>} A promise that will be
         *     resolved to whether the two WebElements are equal.
         */
        static equals(a: WebElement, b: WebElement): webdriver.promise.Promise<boolean>;

        /**
         * @return {!webdriver.WebDriver} The parent driver for this instance.
         */
        getDriver(): webdriver.WebDriver;

        /**
         * @return {!promise.Promise<string>} A promise that resolves to
         *     the server-assigned opaque ID assigned to this element.
         */
        getId(): webdriver.promise.Promise<string>;

        /**
         * @deprecated Use {@link #getId()} instead.
         */
        getRawId(): any;

        /**
         * Schedule a command to find a descendant of this element. If the element
         * cannot be found, a {@link bot.ErrorCode.NO_SUCH_ELEMENT} result will
         * be returned by the driver. Unlike other commands, this error cannot be
         * suppressed. In other words, scheduling a command to find an element doubles
         * as an assert that the element is present on the page. To test whether an
         * element is present on the page, use {@link #isElementPresent} instead.
         *
         * The search criteria for an element may be defined using one of the
         * factories in the {@link webdriver.By} namespace, or as a short-hand
         * {@link webdriver.By.Hash} object. For example, the following two statements
         * are equivalent:
         *
         *     var e1 = element.findElement(By.id('foo'));
         *     var e2 = element.findElement({id:'foo'});
         *
         * You may also provide a custom locator function, which takes as input
         * this WebDriver instance and returns a {@link webdriver.WebElement}, or a
         * promise that will resolve to a WebElement. For example, to find the first
         * visible link on a page, you could write:
         *
         *     var link = element.findElement(firstVisibleLink);
         *
         *     function firstVisibleLink(element) {
         *       var links = element.findElements(By.tagName('a'));
         *       return webdriver.promise.filter(links, function(link) {
         *         return links.isDisplayed();
         *       }).then(function(visibleLinks) {
         *         return visibleLinks[0];
         *       });
         *     }
         *
         * @param {!(by.By|Function)} locator The locator strategy to use when
         *     searching for the element.
         * @return {!WebElementPromise} A WebElement that can be used to issue
         *     commands against the located element. If the element is not found, the
         *     element will be invalidated and all scheduled commands aborted.
         */
        findElement(locator: By|Function): WebElementPromise;

        /**
         * Schedules a command to test if there is at least one descendant of this
         * element that matches the given search criteria.
         *
         * @param {!(by.By|Function)} locator The locator strategy to use when
         *     searching for the element.
         * @return {!promise.Promise<boolean>} A promise that will be
         *     resolved with whether an element could be located on the page.
         * @deprecated This method will be removed in Selenium 3.0 for consistency
         *     with the other Selenium language bindings. This method is equivalent
         *     to
         *
         *      element.findElements(locator).then(e => !!e.length);
         */
        isElementPresent(locator: By|Function): webdriver.promise.Promise<boolean>;

        /**
         * Schedules a command to find all of the descendants of this element that
         * match the given search criteria.
         *
         * @param {!(by.By|Function)} locator The locator strategy to use when
         *     searching for the element.
         * @return {!promise.Promise<!Array<!WebElement>>} A
         *     promise that will resolve to an array of WebElements.
         */
        findElements(locator: By|Function): webdriver.promise.Promise<WebElement[]>;

        /**
         * Schedules a command to click on this element.
         * @return {!webdriver.promise.Promise.<void>} A promise that will be resolved
         *     when the click command has completed.
         */
        click(): webdriver.promise.Promise<void>;

        /**
         * Schedules a command to type a sequence on the DOM element represented by this
         * promsieinstance.
         *
         * Modifier keys (SHIFT, CONTROL, ALT, META) are stateful; once a modifier is
         * processed in the keysequence, that key state is toggled until one of the
         * following occurs:
         *
         * - The modifier key is encountered again in the sequence. At this point the
         *   state of the key is toggled (along with the appropriate keyup/down events).
         * - The {@link webdriver.Key.NULL} key is encountered in the sequence. When
         *   this key is encountered, all modifier keys current in the down state are
         *   released (with accompanying keyup events). The NULL key can be used to
         *   simulate common keyboard shortcuts:
         *
         *         element.sendKeys("text was",
         *                          webdriver.Key.CONTROL, "a", webdriver.Key.NULL,
         *                          "now text is");
         *         // Alternatively:
         *         element.sendKeys("text was",
         *                          webdriver.Key.chord(webdriver.Key.CONTROL, "a"),
         *                          "now text is");
         *
         * - The end of the keysequence is encountered. When there are no more keys
         *   to type, all depressed modifier keys are released (with accompanying keyup
         *   events).
         *
         * If this element is a file input ({@code <input type="file">}), the
         * specified key sequence should specify the path to the file to attach to
         * the element. This is analgous to the user clicking "Browse..." and entering
         * the path into the file select dialog.
         *
         *     var form = driver.findElement(By.css('form'));
         *     var element = form.findElement(By.css('input[type=file]'));
         *     element.sendKeys('/path/to/file.txt');
         *     form.submit();
         *
         * For uploads to function correctly, the entered path must reference a file
         * on the _browser's_ machine, not the local machine running this script. When
         * running against a remote Selenium server, a {@link webdriver.FileDetector}
         * may be used to transparently copy files to the remote machine before
         * attempting to upload them in the browser.
         *
         * __Note:__ On browsers where native keyboard events are not supported
         * (e.g. Firefox on OS X), key events will be synthesized. Special
         * punctionation keys will be synthesized according to a standard QWERTY en-us
         * keyboard layout.
         *
         * @param {...(string|!webdriver.promise.Promise<string>)} var_args The sequence
         *     of keys to type. All arguments will be joined into a single sequence.
         * @return {!webdriver.promise.Promise.<void>} A promise that will be resolved
         *     when all keys have been typed.
         */
        sendKeys(...var_args: Array<string|webdriver.promise.Promise<string>>): webdriver.promise.Promise<void>;

        /**
         * Schedules a command to query for the tag/node name of this element.
         * @return {!webdriver.promise.Promise.<string>} A promise that will be
         *     resolved with the element's tag name.
         */
        getTagName(): webdriver.promise.Promise<string>;

        /**
         * Schedules a command to query for the computed style of the element
         * represented by this instance. If the element inherits the named style from
         * its parent, the parent will be queried for its value.  Where possible, color
         * values will be converted to their hex representation (e.g. #00ff00 instead of
         * rgb(0, 255, 0)).
         *
         * _Warning:_ the value returned will be as the browser interprets it, so
         * it may be tricky to form a proper assertion.
         *
         * @param {string} cssStyleProperty The name of the CSS style property to look
         *     up.
         * @return {!promise.Promise<string>} A promise that will be
         *     resolved with the requested CSS value.
         */
        getCssValue(cssStyleProperty: string): webdriver.promise.Promise<string>;

        /**
         * Schedules a command to query for the value of the given attribute of the
         * element. Will return the current value, even if it has been modified after
         * the page has been loaded. More exactly, this method will return the value of
         * the given attribute, unless that attribute is not present, in which case the
         * value of the property with the same name is returned. If neither value is
         * set, null is returned (for example, the "value" property of a textarea
         * element). The "style" attribute is converted as best can be to a
         * text representation with a trailing semi-colon. The following are deemed to
         * be "boolean" attributes and will return either "true" or null:
         *
         * async, autofocus, autoplay, checked, compact, complete, controls, declare,
         * defaultchecked, defaultselected, defer, disabled, draggable, ended,
         * formnovalidate, hidden, indeterminate, iscontenteditable, ismap, itemscope,
         * loop, multiple, muted, nohref, noresize, noshade, novalidate, nowrap, open,
         * paused, pubdate, readonly, required, reversed, scoped, seamless, seeking,
         * selected, spellcheck, truespeed, willvalidate
         *
         * Finally, the following commonly mis-capitalized attribute/property names
         * are evaluated as expected:
         *
         * - "class"
         * - "readonly"
         *
         * @param {string} attributeName The name of the attribute to query.
         * @return {!webdriver.promise.Promise.<?string>} A promise that will be
         *     resolved with the attribute's value. The returned value will always be
         *     either a string or null.
         */
        getAttribute(attributeName: string): webdriver.promise.Promise<string>;

        /**
         * Get the visible (i.e. not hidden by CSS) innerText of this element, including
         * sub-elements, without any leading or trailing whitespace.
         * @return {!webdriver.promise.Promise.<string>} A promise that will be
         *     resolved with the element's visible text.
         */
        getText(): webdriver.promise.Promise<string>;

        /**
         * Schedules a command to compute the size of this element's bounding box, in
         * pixels.
         * @return {!webdriver.promise.Promise.<{width: number, height: number}>} A
         *     promise that will be resolved with the element's size as a
         *     {@code {width:number, height:number}} object.
         */
        getSize(): webdriver.promise.Promise<ISize>;

        /**
         * Schedules a command to compute the location of this element in page space.
         * @return {!webdriver.promise.Promise.<{x: number, y: number}>} A promise that
         *     will be resolved to the element's location as a
         *     {@code {x:number, y:number}} object.
         */
        getLocation(): webdriver.promise.Promise<ILocation>;

        /**
         * Schedules a command to query whether the DOM element represented by this
         * instance is enabled, as dicted by the {@code disabled} attribute.
         * @return {!webdriver.promise.Promise.<boolean>} A promise that will be
         *     resolved with whether this element is currently enabled.
         */
        isEnabled(): webdriver.promise.Promise<boolean>;

        /**
         * Schedules a command to query whether this element is selected.
         * @return {!webdriver.promise.Promise.<boolean>} A promise that will be
         *     resolved with whether this element is currently selected.
         */
        isSelected(): webdriver.promise.Promise<boolean>;

        /**
         * Schedules a command to submit the form containing this element (or this
         * element if it is a FORM element). This command is a no-op if the element is
         * not contained in a form.
         * @return {!webdriver.promise.Promise.<void>} A promise that will be resolved
         *     when the form has been submitted.
         */
        submit(): webdriver.promise.Promise<void>;

        /**
         * Schedules a command to clear the `value` of this element. This command has
         * no effect if the underlying DOM element is neither a text INPUT element
         * nor a TEXTAREA element.
         * @return {!promise.Promise<void>} A promise that will be resolved
         *     when the element has been cleared.
         */
        clear(): webdriver.promise.Promise<void>;

        /**
         * Schedules a command to test whether this element is currently displayed.
         * @return {!webdriver.promise.Promise.<boolean>} A promise that will be
         *     resolved with whether this element is currently visible on the page.
         */
        isDisplayed(): webdriver.promise.Promise<boolean>;

        /**
         * Take a screenshot of the visible region encompassed by this element's
         * bounding rectangle.
         *
         * @param {boolean=} opt_scroll Optional argument that indicates whether the
         *     element should be scrolled into view before taking a screenshot.
         *     Defaults to false.
         * @return {!promise.Promise<string>} A promise that will be
         *     resolved to the screenshot as a base-64 encoded PNG.
         */
        takeScreenshot(opt_scroll?: boolean): webdriver.promise.Promise<string>;

        /**
         * Schedules a command to retrieve the outer HTML of this element.
         * @return {!webdriver.promise.Promise.<string>} A promise that will be
         *     resolved with the element's outer HTML.
         */
        getOuterHtml(): webdriver.promise.Promise<string>;

        /**
         * Schedules a command to retrieve the inner HTML of this element.
         * @return {!webdriver.promise.Promise} A promise that will be resolved with the
         *     element's inner HTML.
         */
        getInnerHtml(): webdriver.promise.Promise<string>;

        /** @override */
        serialize(): webdriver.promise.Promise<IWebElementId>;
    }

    /**
     * WebElementPromise is a promise that will be fulfilled with a WebElement.
     * This serves as a forward proxy on WebElement, allowing calls to be
     * scheduled without directly on this instance before the underlying
     * WebElement has been fulfilled. In other words, the following two statements
     * are equivalent:
     * <pre><code>
     *     driver.findElement({id: 'my-button'}).click();
     *     driver.findElement({id: 'my-button'}).then(function(el) {
     *       return el.click();
     *     });
     * </code></pre>
     *
     * @param {!webdriver.WebDriver} driver The parent WebDriver instance for this
     *     element.
     * @param {!webdriver.promise.Promise.<!webdriver.WebElement>} el A promise
     *     that will resolve to the promised element.
     * @constructor
     * @extends {webdriver.WebElement}
     * @implements {webdriver.promise.Thenable.<!webdriver.WebElement>}
     * @final
     */
    class WebElementPromise extends WebElement implements webdriver.promise.IThenable<WebElement> {
        /**
         * @param {!WebDriver} driver The parent WebDriver instance for this
         *     element.
         * @param {!promise.Promise<!WebElement>} el A promise
         *     that will resolve to the promised element.
         */
        constructor(driver: webdriver.WebDriver, el: webdriver.promise.Promise<WebElement>);

        /**
         * Cancels the computation of this promise's value, rejecting the promise in the
         * process. This method is a no-op if the promise has alreayd been resolved.
         *
         * @param {string=} opt_reason The reason this promise is being cancelled.
         */
        cancel(opt_reason?: string): void;


        /** @return {boolean} Whether this promise's value is still being computed. */
        isPending(): boolean;


        /**
         * Registers listeners for when this instance is resolved.
         *
         * @param opt_callback The
         *     function to call if this promise is successfully resolved. The function
         *     should expect a single argument: the promise's resolved value.
         * @param opt_errback The
         *     function to call if this promise is rejected. The function should expect
         *     a single argument: the rejection reason.
         * @return A new promise which will be
         *     resolved with the result of the invoked callback.
         */
        then<R>(opt_callback?: (value: WebElement) => webdriver.promise.Promise<R>, opt_errback?: (error: any) => any): webdriver.promise.Promise<R>;

        /**
         * Registers listeners for when this instance is resolved.
         *
         * @param opt_callback The
         *     function to call if this promise is successfully resolved. The function
         *     should expect a single argument: the promise's resolved value.
         * @param opt_errback The
         *     function to call if this promise is rejected. The function should expect
         *     a single argument: the rejection reason.
         * @return A new promise which will be
         *     resolved with the result of the invoked callback.
         */
        then<R>(opt_callback?: (value: WebElement) => R, opt_errback?: (error: any) => any): webdriver.promise.Promise<R>;


        /**
         * Registers a listener for when this promise is rejected. This is synonymous
         * with the {@code catch} clause in a synchronous API:
         * <pre><code>
         *   // Synchronous API:
         *   try {
         *     doSynchronousWork();
         *   } catch (ex) {
         *     console.error(ex);
         *   }
         *
         *   // Asynchronous promise API:
         *   doAsynchronousWork().thenCatch(function(ex) {
         *     console.error(ex);
         *   });
         * </code></pre>
         *
         * @param {function(*): (R|webdriver.promise.Promise.<R>)} errback The function
         *     to call if this promise is rejected. The function should expect a single
         *     argument: the rejection reason.
         * @return {!webdriver.promise.Promise.<R>} A new promise which will be
         *     resolved with the result of the invoked callback.
         * @template R
         */
        thenCatch<R>(errback: (error: any) => any): webdriver.promise.Promise<R>;


        /**
         * Registers a listener to invoke when this promise is resolved, regardless
         * of whether the promise's value was successfully computed. This function
         * is synonymous with the {@code finally} clause in a synchronous API:
         * <pre><code>
         *   // Synchronous API:
         *   try {
         *     doSynchronousWork();
         *   } finally {
         *     cleanUp();
         *   }
         *
         *   // Asynchronous promise API:
         *   doAsynchronousWork().thenFinally(cleanUp);
         * </code></pre>
         *
         * <b>Note:</b> similar to the {@code finally} clause, if the registered
         * callback returns a rejected promise or throws an error, it will silently
         * replace the rejection error (if any) from this promise:
         * <pre><code>
         *   try {
         *     throw Error('one');
         *   } finally {
         *     throw Error('two');  // Hides Error: one
         *   }
         *
         *   webdriver.promise.rejected(Error('one'))
         *       .thenFinally(function() {
         *         throw Error('two');  // Hides Error: one
         *       });
         * </code></pre>
         *
         *
         * @param {function(): (R|webdriver.promise.Promise.<R>)} callback The function
         *     to call when this promise is resolved.
         * @return {!webdriver.promise.Promise.<R>} A promise that will be fulfilled
         *     with the callback result.
         * @template R
         */
        thenFinally<R>(callback: () => any): webdriver.promise.Promise<R>;

        /**
         * Registers a listener for when this promise is rejected. This is synonymous
         * with the {@code catch} clause in a synchronous API:
         *
         *     // Synchronous API:
         *     try {
         *       doSynchronousWork();
         *     } catch (ex) {
         *       console.error(ex);
         *     }
         *
         *     // Asynchronous promise API:
         *     doAsynchronousWork().catch(function(ex) {
         *       console.error(ex);
         *     });
         *
         * @param {function(*): (R|IThenable<R>)} errback The
         *     function to call if this promise is rejected. The function should
         *     expect a single argument: the rejection reason.
         * @return {!ManagedPromise<R>} A new promise which will be
         *     resolved with the result of the invoked callback.
         * @template R
         */
        catch<R>(errback: Function): webdriver.promise.Promise<R>;
    }

    /**
     * Contains information about a WebDriver session.
     */
    class Session {

        //region Constructors

        /**
         * @param {string} id The session ID.
         * @param {!(Object|webdriver.Capabilities)} capabilities The session
         *     capabilities.
         * @constructor
         */
        constructor(id: string, capabilities: Capabilities|Object);

        //endregion

        //region Methods

        /**
         * @return {string} This session's ID.
         */
        getId(): string;

        /**
         * @return {!webdriver.Capabilities} This session's capabilities.
         */
        getCapabilities(): webdriver.Capabilities;

        /**
         * Retrieves the value of a specific capability.
         * @param {string} key The capability to retrieve.
         * @return {*} The capability value.
         */
        getCapability(key: string): any;

        /**
         * Returns the JSON representation of this object, which is just the string
         * session ID.
         * @return {string} The JSON representation of this Session.
         */
        toJSON(): string;

        //endregion
    }
}

declare namespace testing {
    /**
    * Registers a new test suite.
    * @param name The suite name.
    * @param fn The suite function, or {@code undefined} to define a pending test suite.
    */
    function describe(name: string, fn: Function): void;

    /**
     * Defines a suppressed test suite.
     * @param name The suite name.
     * @param fn The suite function, or {@code undefined} to define a pending test suite.
     */
    function xdescribe(name: string, fn: Function): void;

    /**
     * Register a function to call after the current suite finishes.
     * @param fn
     */
    function after(fn: Function): void;

    /**
     * Register a function to call after each test in a suite.
     * @param fn
     */
    function afterEach(fn: Function): void;

    /**
     * Register a function to call before the current suite starts.
     * @param fn
     */
    function before(fn: Function): void;

    /**
     * Register a function to call before each test in a suite.
     * @param fn
     */
    function beforeEach(fn: Function): void;

    /**
     * Add a test to the current suite.
     * @param name The test name.
     * @param fn The test function, or {@code undefined} to define a pending test case.
     */
    function it(name: string, fn: Function): void;

    /**
     * An alias for {@link #it()} that flags the test as the only one that should
     * be run within the current suite.
     * @param name The test name.
     * @param fn The test function, or {@code undefined} to define a pending test case.
     */
    function iit(name: string, fn: Function): void;

    /**
     * Adds a test to the current suite while suppressing it so it is not run.
     * @param name The test name.
     * @param fn The test function, or {@code undefined} to define a pending test case.
     */
    function xit(name: string, fn: Function): void;
}

declare module 'selenium-webdriver/chrome' {
    export = chrome;
}

declare module 'selenium-webdriver/executors' {
    export = executors;
}

declare module 'selenium-webdriver' {
    export = webdriver;
}

declare module 'selenium-webdriver/testing' {
    export = testing;
}
