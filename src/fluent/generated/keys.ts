import "@servicenow/sdk/global";

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                        "cs0": {
                            "table": "sys_script_client",
                            "id": "1a9dfcc68def47f6a83f0db64b7ac999"
                        },
                        "src_server_script_ts": {
                            "table": "sys_module",
                            "id": "e20644b912014a0d911a8c00ec3fa4f5"
                        },
                        "br0": {
                            "table": "sys_script",
                            "id": "02c238465ea0427facbb65798a46c1ca"
                        },
                        "package_json": {
                            "table": "sys_module",
                            "id": "81dc35870d214af4bd79808361adb879"
                        }
                    };
                composite: [
                        {
                            "table": "sys_module",
                            "id": "7c8f63b9c8844523b4ce00b7b5e5ef7c",
                            "key": {
                                "module": "lodash.snakecase@4.1.1",
                                "file": "index.js"
                            }
                        },
                        {
                            "table": "sys_module",
                            "id": "3d49ba24f8e04d978d92b6fa651c71d8",
                            "key": {
                                "module": "lodash.snakecase@4.1.1",
                                "file": "cyclonedx/bom.json"
                            }
                        },
                        {
                            "table": "sys_module",
                            "id": "86d0163278864b8aa2c5cd1e343c40d7",
                            "key": {
                                "module": "lodash.snakecase@4.1.1",
                                "file": "package.json"
                            }
                        }
                    ];
            }
        }
    }
}
