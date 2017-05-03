const wt = typeof WebTrends !== "undefined" ? WebTrends : {
    multiTrack: () => console.error("multiTrack is undefined."),
    dcss: {}
};

export const multiTrack = wt.multiTrack;
export const multiCleanUp = (...args) => {
    if (args && args.length > 0) {
        if (args.length === 1) {
            args = args[0].split(";");
        }

        const props = args.reduce((s, prop) => {
            s.push(prop);
            s.push("");
            return s;
        }, []);
        const dcss = wt.dcss;
        Object.keys(dcss).forEach((dcsid) => {
            const dcs = dcss[dcsid];
            dcs.dcsSetProps(props);
        });
    }
};

export default wt;