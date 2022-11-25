import ListGroup from "react-bootstrap/ListGroup";
import Badge from 'react-bootstrap/Badge';

const LeaderboardItem = (item) => {
    const details = item.leader
    return (
        <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-start"
        >
            <div className="ms-2 me-auto">
                <div className="fw-bold">{details.name}</div>
            </div>
            <Badge bg="primary" pill>
                {details.streak} 
            </Badge>
        </ListGroup.Item>
    )

}

export default LeaderboardItem