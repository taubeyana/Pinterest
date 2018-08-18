import React, {Component} from 'react';
import './ReportButton.css';
import Button from './../button/Button';

class ReportButton extends Component {
    render() {
        return(
            <Button buttonType="button" text="Report" faIcon="ban" className="report-btn"/>
        )
    }
}
export default ReportButton;