mailsentinel/
│
├── src/
│   ├── index.js                  # Main entry point (exports all functions)
│   │
│   ├── validators/
│   │   └── emailValidator.js    # Email format validation
│   │
│   ├── dns/
│   │   └── mxChecker.js         # Domain + MX record checks
│   │
│   ├── smtp/
│   │   └── smtpVerifier.js      # SMTP handshake & reachability logic
│   │
│   ├── detectors/
│   │   ├── disposable.js        # Disposable email detection
│   │   └── catchAll.js          # Catch-all domain detection
│   │
│   ├── utils/
│   │   ├── timeout.js           # Timeout wrapper
│   │   ├── retry.js             # Retry mechanism
│   │   └── logger.js            # Optional logging utility
│
│
├── data/
│   └── disposable-domains.json  # List of disposable email domains
│
├── tests/
│   ├── emailValidator.test.js
│   ├── mxChecker.test.js
│   └── smtpVerifier.test.js
│
├── examples/
│   └── basic.js                 # Example usage
│
├── .gitignore
├── package.json
├── README.md
├── LICENSE
└── jest.config.js