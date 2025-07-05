import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { CalendarIcon, Download, Copy, Edit, Send } from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';

const ContractGenerator = () => {
  const [contractType, setContractType] = useState('nda');
  const [partyAName, setPartyAName] = useState('');
  const [partyBName, setPartyBName] = useState('');
  const [effectiveDate, setEffectiveDate] = useState<Date>();
  const [outputFormat, setOutputFormat] = useState('pdf');
  const [usePromptTemplate, setUsePromptTemplate] = useState(true);
  const [useRAGMode, setUseRAGMode] = useState(false);
  const [autoClauseScoring, setAutoClauseScoring] = useState(false);
  const [redlineMode, setRedlineMode] = useState(false);
  const [hideMeta, setHideMeta] = useState(false);

  const mockContract = `NON-DISCLOSURE AGREEMENT

This Non-Disclosure Agreement ("Agreement") is entered into on ${effectiveDate ? format(effectiveDate, 'MMMM dd, yyyy') : '[DATE]'} by and between ${partyAName || '[PARTY A]'} ("Disclosing Party") and ${partyBName || '[PARTY B]'} ("Receiving Party").

WHEREAS, the Disclosing Party desires to share certain confidential and proprietary information with the Receiving Party for the purpose of evaluating a potential business relationship;

NOW, THEREFORE, in consideration of the mutual covenants and agreements contained herein, the parties agree as follows:

1. DEFINITION OF CONFIDENTIAL INFORMATION
   "Confidential Information" shall mean any and all non-public, confidential or proprietary information disclosed by the Disclosing Party to the Receiving Party...

2. OBLIGATIONS OF RECEIVING PARTY
   The Receiving Party agrees to:
   a) Hold and maintain the Confidential Information in strict confidence;
   b) Not disclose the Confidential Information to any third parties...

3. TERM
   This Agreement shall remain in effect for a period of three (3) years from the date first written above...

4. RETURN OF MATERIALS
   Upon termination of this Agreement, the Receiving Party shall promptly return or destroy all materials containing Confidential Information...

[Additional clauses would continue...]`;

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Top Navbar */}
      <nav className="sticky top-0 z-50 bg-black border-b-2 border-white">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="text-2xl font-black text-white flex items-center gap-2">
            ACCORDLY ⚖️
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Button 
              variant="ghost" 
              className="text-white hover:text-accent-blue font-bold"
            >
              Generate Contract
            </Button>
            <Button 
              variant="ghost" 
              className="text-white hover:text-accent-blue font-bold"
            >
              Review
            </Button>
            <Button 
              variant="ghost" 
              className="text-white hover:text-accent-blue font-bold"
            >
              Clause Library
            </Button>
            <Button 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-black font-bold rounded-none"
              onClick={() => window.location.href = '/login'}
            >
              Sign In
            </Button>
          </div>
        </div>
      </nav>

      {/* Main Layout */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Panel: Contract Setup */}
          <Card className="bg-black border-2 border-white">
            <CardHeader>
              <CardTitle className="text-xl font-black text-white">Contract Setup</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Contract Type */}
              <div className="space-y-2">
                <Label className="text-white font-bold">Select Contract Type</Label>
                <Select value={contractType} onValueChange={setContractType}>
                  <SelectTrigger className="h-12 bg-black border-2 border-white text-white rounded-none">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-black border-2 border-white">
                    <SelectItem value="nda">NDA (Non-Disclosure Agreement)</SelectItem>
                    <SelectItem value="msa">MSA (Master Service Agreement)</SelectItem>
                    <SelectItem value="employment">Employment Agreement</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Party Names */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label className="text-white font-bold">Party A Name</Label>
                  <Input
                    value={partyAName}
                    onChange={(e) => setPartyAName(e.target.value)}
                    placeholder="Enter Party A name"
                    className="h-12 bg-black border-2 border-white text-white placeholder:text-gray-400 rounded-none"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-white font-bold">Party B Name</Label>
                  <Input
                    value={partyBName}
                    onChange={(e) => setPartyBName(e.target.value)}
                    placeholder="Enter Party B name"
                    className="h-12 bg-black border-2 border-white text-white placeholder:text-gray-400 rounded-none"
                  />
                </div>
              </div>

              {/* Effective Date */}
              <div className="space-y-2">
                <Label className="text-white font-bold">Effective Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "h-12 w-full justify-start text-left font-normal bg-black border-2 border-white text-white hover:bg-white hover:text-black rounded-none",
                        !effectiveDate && "text-gray-400"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {effectiveDate ? format(effectiveDate, "PPP") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0 bg-black border-2 border-white" align="start">
                    <Calendar
                      mode="single"
                      selected={effectiveDate}
                      onSelect={setEffectiveDate}
                      initialFocus
                      className="pointer-events-auto"
                    />
                  </PopoverContent>
                </Popover>
              </div>

              {/* Toggle Switches */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label className="text-white font-bold">Use Prompt Template</Label>
                  <Switch
                    checked={usePromptTemplate}
                    onCheckedChange={setUsePromptTemplate}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <Label className="text-white font-bold">Use RAG Mode</Label>
                  <Switch
                    checked={useRAGMode}
                    onCheckedChange={setUseRAGMode}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <Label className="text-white font-bold">Auto Clause Risk Scoring</Label>
                  <Switch
                    checked={autoClauseScoring}
                    onCheckedChange={setAutoClauseScoring}
                  />
                </div>
              </div>

              {/* Generate Button */}
              <Button
                className="w-full h-14 bg-accent-blue text-accent-blue-foreground hover:bg-accent-blue/80 font-black rounded-none text-lg border-2 border-accent-blue hover:border-accent-blue/80 transition-all duration-300 shadow-lg"
                size="lg"
              >
                ⚡ GENERATE CONTRACT
              </Button>
            </CardContent>
          </Card>

          {/* Right Panel: Output Settings */}
          <Card className="bg-black border-2 border-white">
            <CardHeader>
              <CardTitle className="text-xl font-black text-white">Output Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Output Format */}
              <div className="space-y-2">
                <Label className="text-white font-bold">Output Format</Label>
                <Select value={outputFormat} onValueChange={setOutputFormat}>
                  <SelectTrigger className="h-12 bg-black border-2 border-white text-white rounded-none">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-black border-2 border-white">
                    <SelectItem value="plain">Plain Text</SelectItem>
                    <SelectItem value="html">HTML</SelectItem>
                    <SelectItem value="pdf">PDF</SelectItem>
                    <SelectItem value="word">Microsoft Word</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Download Buttons */}
              <div className="space-y-3">
                <Button
                  variant="outline"
                  className="w-full h-12 border-2 border-white text-white hover:bg-white hover:text-black font-bold rounded-none"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download PDF
                </Button>
                <Button
                  variant="outline"
                  className="w-full h-12 border-2 border-white text-white hover:bg-white hover:text-black font-bold rounded-none"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download Word
                </Button>
                <Button
                  variant="outline"
                  className="w-full h-12 border-2 border-accent-blue text-accent-blue hover:bg-accent-blue hover:text-black font-bold rounded-none"
                >
                  <Send className="mr-2 h-4 w-4" />
                  Send for e-Signature
                </Button>
              </div>

              {/* Optional Toggles */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label className="text-white font-bold">Redline Mode</Label>
                  <Switch
                    checked={redlineMode}
                    onCheckedChange={setRedlineMode}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <Label className="text-white font-bold">Hide Meta</Label>
                  <Switch
                    checked={hideMeta}
                    onCheckedChange={setHideMeta}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Live Contract Preview */}
          <Card className="bg-black border-2 border-white lg:col-span-1">
            <CardHeader>
              <CardTitle className="text-xl font-black text-white">Live Preview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-secondary border border-white p-6 rounded-none h-96 overflow-y-auto">
                <pre className="text-white text-sm leading-relaxed whitespace-pre-wrap font-mono">
                  {mockContract}
                </pre>
              </div>
              <div className="flex gap-2 mt-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="border border-white text-white hover:bg-white hover:text-black rounded-none"
                >
                  <Copy className="mr-1 h-3 w-3" />
                  Copy
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="border border-white text-white hover:bg-white hover:text-black rounded-none"
                >
                  <Edit className="mr-1 h-3 w-3" />
                  Edit in Word
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="border border-white text-white hover:bg-white hover:text-black rounded-none"
                >
                  <Download className="mr-1 h-3 w-3" />
                  Export
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ContractGenerator;