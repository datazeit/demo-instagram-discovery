import { IconRefresh } from "@tabler/icons-react";
import React, { useContext } from "react";
import { SearchContext } from "../context/Search";
import { NearMeIndicator } from "./NearMeButton";

export const Header = () => {
    return (
        <div className="page-header">
            <div className="container-xl">
                <div className="row align-items-center">
                    <div className="col d-flex">
                        <a href="https://eyva.ai" target="_blank">
                            <img
                                src="/eyva_logo_white.svg"
                                width={130}
                                alt={"Powered by eyva.ai"}
                                style={{ filter: "invert(100%)" }}
                            />
                        </a>
                        <div className="d-flex flex-column" style={{ marginLeft: "1rem", marginTop: "-3px" }}>
                            <div className="page-pretitle">Semantic search</div>
                            <h2 className="page-title">Social Media Discovery</h2>
                        </div>
                    </div>
                    <div className={"col-auto ms-auto"}>
                        <NearMeIndicator />
                    </div>
                </div>
            </div>
        </div>
    );
};

export const RefreshButton = () => {
    const { setLocation, clearFilters, retrieveResults } = useContext(SearchContext);

    const handleRefresh = () => {
        setLocation(null);
        retrieveResults(clearFilters(), null);
    };

    return (
        <div className="cursor-pointer ribbon ribbon-top bg-teal" onClick={handleRefresh} title="Reset all">
            <button className="switch-icon" style={{ fontSize: "2em" }}>
                <span className="text-white switch-icon-a">
                    <IconRefresh />
                </span>
            </button>
        </div>
    );
};

export const StrategySwitch = () => {
    const { newStrategy, setNewStrategy, retrieveResults, filters, location } = useContext(SearchContext);

    const handleSwitch = () => {
        setNewStrategy(!newStrategy);
        retrieveResults(filters, location, !newStrategy);
    };

    return (
        <label className="form-check form-switch">
            <input className="form-check-input" type="checkbox" onChange={handleSwitch} checked={newStrategy} />
            <span className="form-check-label">New recommendations algorithm</span>
        </label>
    );
};
