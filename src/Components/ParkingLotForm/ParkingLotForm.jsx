import React, { useState } from 'react';
import { Form, Button, FormGroup, Label, Input } from 'reactstrap';

import './ParkingLotForm.css';

const PRIORITIES = {
  High: 'High',
  Medium: 'Medium',
  Low: 'Low'
}

export default function ParkingLotForm() {

    const [date, setDate] = useState('');
    const [link, setLink] = useState('');
    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState(PRIORITIES.Medium);

    function handleDateChange(e) {
      setDate(e.target.value);
    }

    function handleLinkChange(e) {
      setLink(e.target.value);
    }

    function handleDescriptionChange(e) {
      setDescription(e.target.value);
    }

    function handlePriorityChange(e) {
      setPriority(e.target.value);
    }

  return (
    <Form data-bs-theme="dark" className="parking-lot-form">
      <FormGroup class="parking-lot-row">
        <Label for="link-date">Date</Label>
        <Input
          id="link-date"
          name="date"
          type="date"
          value={date}
          onChange={handleDateChange}
          required />
      </FormGroup>
      <FormGroup class="parking-lot-row">
        <Label htmlFor="link-url">Link</Label>
        <Input
          id="link-url"
          name="url"
          type="url"
          value={link}
          onChange={handleLinkChange}
          required />
      </FormGroup>
      <FormGroup class="parking-lot-row">
        <Label htmlFor="link-description">Description</Label>
        <Input
          id="link-description"
          type="text"
          value={description}
          onChange={handleDescriptionChange}
          required
          name="description" />
      </FormGroup>
      <FormGroup class="parking-lot-row">
        <Input
          name="radio-priority"
          type="radio"
          value={PRIORITIES.High}
          checked={priority === PRIORITIES.High}
          onChange={handlePriorityChange}
          id="prio-high" />
        {' '}
        <Label htmlFor="prio-high" className="me-3">High</Label>

        <Input
          name="radio-priority"
          type="radio"
          value={PRIORITIES.Medium}
          checked={priority === PRIORITIES.Medium}
          id="prio-medium" />
        <Label htmlFor="prio-medium" className="me-3">Medium</Label>

        <Input
          name="radio-priority"
          type="radio"
          value={PRIORITIES.Low}
          checked={priority === PRIORITIES.Low}
          id="prio-low" />
        {' '}
        <Label htmlFor="prio-low" className="me-3">Low</Label>

      </FormGroup>
      <Button type="submit">Submit</Button>
    </Form>
  )
}
