const fs = require( 'fs' );
const path = require( 'path' );
const Table = require( 'cli-table3' );

class DetectorCloneReport {
    constructor( options ) {
        this.options = options;
    }

    convertStatisticToArray ( format, statistic ) {
        return [
            format,
            `${statistic.sources}`,
            `${statistic.lines}`,
            `${statistic.tokens}`,
            `${statistic.clones}`,
            `${statistic.duplicatedLines} (${statistic.percentage}%)`,
            `${statistic.duplicatedTokens} (${statistic.percentageTokens}%)`,
        ];
    }

    report ( clones, statistic = undefined ) {

        // console.log( clones )
        // console.log( statistic )

        fs.writeFileSync( '/Users/lamho/Desktop/前端代码/Ncnbb/omg-rc-cli/lib/utils/doctor/report.json', JSON.stringify( { clones, statistic }, null, '\t' ) );

        const table = new Table( {
            head: ['文件类型', '文件数量', '共计行数', '令牌数', '重复代码数量', '重复行数', '重复令牌数'],
        } );
        Object.keys( statistic.formats )
            .filter( ( format ) => statistic.formats[format].sources )
            .forEach( ( format ) => {
                table.push( this.convertStatisticToArray( format, statistic.formats[format].total ) );
            } );

        table.push(this.convertStatisticToArray('Total:', statistic.total));
        console.log( table.toString() );
        console.log(clones)
    }
}
module.exports = DetectorCloneReport;