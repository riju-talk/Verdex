
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Upload, FileText, Image, BarChart3, CheckCircle } from "lucide-react";
import { useState } from "react";

const uploadedFiles = [
  { name: "Environmental_Report_2024.pdf", size: "2.4 MB", status: "analyzed", type: "pdf" },
  { name: "Air_Quality_Data.csv", size: "856 KB", status: "processing", type: "csv" },
  { name: "Satellite_Image_SF.jpg", size: "4.1 MB", status: "queued", type: "image" }
];

export function DocumentUploader() {
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    // Handle file drop logic here
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Smart Document Analyzer</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div
          className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
            dragActive ? "border-emerald-500 bg-emerald-50" : "border-gray-300"
          }`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            Upload Environmental Documents
          </h3>
          <p className="text-gray-600 mb-4">
            Drop files here or click to browse. Supports PDF, CSV, Images, and more.
          </p>
          <Button className="bg-emerald-600 hover:bg-emerald-700">
            Select Files
          </Button>
        </div>

        <div className="space-y-3">
          <h4 className="font-medium text-gray-900">Recent Uploads</h4>
          {uploadedFiles.map((file, index) => {
            const getIcon = () => {
              switch (file.type) {
                case "pdf": return FileText;
                case "csv": return BarChart3;
                case "image": return Image;
                default: return FileText;
              }
            };
            const Icon = getIcon();

            return (
              <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center space-x-3">
                  <Icon className="w-5 h-5 text-gray-500" />
                  <div>
                    <p className="font-medium text-gray-900">{file.name}</p>
                    <p className="text-sm text-gray-500">{file.size}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  {file.status === "analyzed" && (
                    <>
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="text-sm text-green-600">Analyzed</span>
                    </>
                  )}
                  {file.status === "processing" && (
                    <>
                      <Progress value={65} className="w-16 h-2" />
                      <span className="text-sm text-blue-600">Processing</span>
                    </>
                  )}
                  {file.status === "queued" && (
                    <span className="text-sm text-gray-500">Queued</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
