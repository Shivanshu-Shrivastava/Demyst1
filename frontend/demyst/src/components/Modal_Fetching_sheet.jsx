import React from 'react'

const Modal_Fetching_sheet = ({data}) => {
    return (
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Year</th>
                                    <th scope="col">Month</th>
                                    <th scope="col">Profit or Loss</th>
                                    <th scope="col">Assets Value</th>
                                </tr>
                            </thead>
                            <tbody>
                                
                                {data?.map(ele=><tr>
                                    <td>{ele.year}</td>
                                    <td>{ele.month}</td>
                                    <td>{ele.profitOrLoss}</td>
                                    <td>{ele.assetsValue}</td>
                                </tr>)}
                               
                            </tbody>
                        </table>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal_Fetching_sheet